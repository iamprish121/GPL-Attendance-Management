import React, { useState, useEffect } from "react";

function Classdetails() {
  const [classData, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:4000/getClassData")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {Object.keys(classData).length > 0 ? (
          <li
            key={classData._id}
            className="text-white font-bold text-xl leading-8"
          >
            <p>Course: {classData.course}</p>
            <p>Section: {classData.section}</p>
            <p>Subject: {classData.subject}</p>
            <p>Subject Code: {classData.subjectCode}</p>
            <p>Faculty Name: {classData.name}</p>
          </li>
        ) : (
          <li className="text-white font-bold text-xl leading-8">
            No class data available
          </li>
        )}
      </ul>
    </div>
  );
}

export default Classdetails;
