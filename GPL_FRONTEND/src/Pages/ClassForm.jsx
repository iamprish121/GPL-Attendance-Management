import React from 'react';
import Mapimgtxt from '../Components/Mapimgtxt';
import Form1 from '../Components/Form1';

function ClassForm() {
  return (
    <div className="my-6">
      <div className="md:flex md:space-x-6 mx-8 md:mx-16">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 md:w-full">
          <div className="flex items-center justify-center h-full">
            <Mapimgtxt /> 
          </div>
          <div>
            <Form1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassForm;
