import React from 'react';
import Studentlist from './Studentlist';

function Attendeeslist() {
  return (
    <div className="flex flex-col selection:overflow-x-auto w-full align-middle overflow-hidden rounded-xl border-4 border-gray-700">
      <Studentlist />
    </div>
  );
}

export default Attendeeslist;
