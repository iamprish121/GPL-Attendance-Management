import React from "react";
import Classdetails from "./Classdetails";
import student from "../assets/student.png";

function Details() {
  return (
    <div className="flex flex-col w-96 max-w-full p-6 gap-8 bg-transparent rounded-xl border-4 border-gray-700 my-16 justify-center">
      <h1 className="text-3xl font-bold leading-8 text-white">Class Details</h1>
      <Classdetails />
      <img
        className="h-36 mt-8 mx-auto"
        src={student}
        alt="student"
      />
    </div>
  );
}

export default Details;
