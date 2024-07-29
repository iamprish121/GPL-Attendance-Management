import React, { useState, useEffect } from "react";
import yaml from "js-yaml";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";

function Form2() {
  const location = useLocation();
  const urls = location.pathname.split("/");
  const navigate = useNavigate();

  const [studentData, setData] = useState({
    name: "",
    rollno: 0,
    studentid: "",
    latitude: 0.0,
    longitude: 0.0,
    present: false,
  });
  const [submitStatus, setsubmitStatus] = useState(false);
  const [formError, setformError] = useState(false);

  useEffect(() => {
    console.log("featching location")
    navigator.geolocation.getCurrentPosition((position) => {
      setData((prevData) => ({
        ...prevData,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }));
    });
  }, []);

  const submitHandle= () => {
    fetch(`http://localhost:4000/student-form/:adminId`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the backend if needed
      console.log("Response from server:", data);
      setsubmitStatus(true);
    })
    .catch((error) => {
      console.error("Error sending data to the server:", error);
      setformError(true);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentData.name && studentData.rollno && studentData.studentid) {
      const yamlData = yaml.dump(studentData);
      fetch(`http://localhost:4000/student-data/${urls[2]}/${urls[3]}`, {
        method: "POST",
        headers: {
          "Content-type": "application/x-yaml",
        },
        body: yamlData,
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setsubmitStatus(true);

          setTimeout(() => {
            setsubmitStatus(false);
            navigate('/class-form2')
          }, 500);
        })
        .catch((err) => {
          console.error(err);
        });
        navigate('/class-form2')
    } else {
      setformError(true);

      setTimeout(() => {
        setformError(false);
      }, 500);
    }
  };

  return (
    <>
      <form
        className="border-4 border-gray-700 rounded-2xl py-10 px-6 w-11/12 lg:w-2/6"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={studentData.name}
            onChange={(e) => setData({ ...studentData, name: e.target.value })}
            placeholder="Enter your name"
          />
        </div>

        {/* Roll No */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Roll no:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            id="rollno"
            type="text"
            value={studentData.rollno > 0 ? studentData.rollno : ""}
            onChange={(e) =>
              setData({ ...studentData, rollno: e.target.value })
            }
            placeholder="Enter Roll no"
            inputMode="numeric"
            style={{ MozAppearance: "textfield", appearance: "textfield" }}
            pattern="[0-9]*"
          />
        </div>

        {/* Student ID */}
        <div className="mb-12">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Student ID:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Studentid"
            type="string"
            value={studentData.studentid}
            onChange={(e) =>
              setData({ ...studentData, studentid: e.target.value })
            }
            placeholder="Enter Student ID"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center justify-center">
          <button onClick={submitHandle}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            
          >
            Submit
          </button>
        </div>

        {formError && (
          <div className="fixed rounded-t-xl bottom-0 left-0 right-0 bg-red-500 text-white p-4 text-center text-lg font-semibold animate-slide-up">
            Kindly fill up all the details.
          </div>
        )}

        {submitStatus && (
          <div className="fixed rounded-t-xl bottom-0 left-0 right-0 bg-green-500 text-white p-4 text-center text-lg font-semibold animate-slide-up">
            Your details are submitted !!
          </div>
        )}
      </form>
    </>
  );
}

export default Form2;
