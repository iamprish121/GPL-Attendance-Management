import React from "react";
import Details from "../Components/Details";
import Attendeeslist from "../Components/Attendeeslist";

function classroom() {
  return (
    <div className="flex flex-col md:flex-row bg-transparent w-full overflow-hidden gap-8 p-6">
      <Details className="" />
      <Attendeeslist className="" />
    </div>
  );
}

export default classroom;
