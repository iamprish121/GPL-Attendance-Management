import React, { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";

function Studentlist() {
  const [studentData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:4000/getStudentData")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const newData = data.map((item, index) => ({
          ...item,
          index: index + 1,
        }));
        setData(newData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-white text-lg">
          <thead className="text-gray-600 border-b-4 border-gray-700 bg-blue-200 font-bold text-center">
            <tr>
              <th scope="col" className="">
                S.No
              </th>
              <th scope="col" className="px-6 py-3 md:py-4 md:px-8">
                Name
              </th>
              <th scope="col" className="px-6 py-3 md:py-4 md:px-8">
                Roll no.
              </th>
              <th scope="col" className="px-6 py-3 md:py-4 md:px-8">
                Student ID
              </th>
              <th scope="col" className="px-6 py-3 md:py-4 md:px-8">
                Attendes Status
              </th>
            </tr>
          </thead>
          {studentData.length > 0 ? (
            studentData.map((item) => (
              <tbody className="">
                <tr>
                  <td
                    scope="col"
                    className="px-6 py-3 md:py-4 md:px-8 text-center text-gray-700 font-bold"
                  >
                    {item.index}
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-3 md:py-4 md:px-8 text-center"
                  >
                    {item.name}
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-3 md:py-4 md:px-8 text-center"
                  >
                    {item.rollno}
                  </td>
                  <td
                    scope="col"
                    className="px-6 py-3 md:py-4 md:px-8 text-center"
                  >
                    {item.studentid}
                  </td>
                  <td
                    scope="col"
                    className="flex px-6 py-3 md:py-4 md:px-8 justify-center mt-3 md:mt-0"
                  >
                    {item.present ? (
                      <CheckCircleIcon className="w-7 h-7 md:w-8 md:h-8 text-green-500" />
                    ) : (
                      <XCircleIcon className="w-7 h-7 md:w-8 md:h-8 text-red-500" />
                    )}
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <h1 className="flex justify-center items-center text-white font-bold text-xl">
              No student data available
            </h1>
          )}
        </table>
      </div>
    </>
  );
}

export default Studentlist;
