import React from 'react';
import { GrMapLocation } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { Link, useLocation } from "react-router-dom";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

function Navbar() {

  return (
    <div className="border-b border-gray-700">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="md:text-4xl text-3xl font-large text-white ">
          <MapOutlinedIcon fontSize="large"/>
        </Link>
        {/* Nav items */}
        <div className="flex items-center sm:space-x-4 space-x-3">
          {/* <a
            href="https://github.com/AKACHI-4/GPI"
            target="_blank"
            className="text-white"
          >
            <AiFillGithub size={25} />
          </a> */}
          <Link
            to="/"
            className="font-medium md:mr-4 mr-3 text-gray-100 md:text-base text-sm"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-medium md:mr-4 mr-3 text-gray-100 md:text-base text-sm"
          >
            About
          </Link>
        <Link
          to="/login"
          className="flex items-center md:px-4 md:h-10 h-9 px-3 text-white bg-blue-600 rounded-lg font-semibold text-sm"            
        >
          Login
        </Link>
          {/* {location.pathname !== "/editor" && (
            <Link
              to="/editor"
              className="flex items-center md:px-4 md:h-10 h-9 px-3 text-white bg-blue-600 rounded-lg font-semibold md:text-sm text-xs"
            >
              Create
            </Link>
          )} */}

          {/* {location.pathname === "/editor" && (
            <>
              <button
                onClick={__markdownCopy}
                data-tip="Copy to clipboard"
                data-for="tool-tip"
                className="md:px-4 md:h-10 h-9 px-3 text-white bg-white/5 rounded-lg hover:text-green-400 transition-all duration-200"
              >
                <RiFileCopy2Fill size={20} />
              </button>
              <button
                onClick={__markdownDownload}
                data-tip="Download"
                data-for="tool-tip"
                className="md:px-4 md:h-10 h-9 px-3 text-white bg-blue-600 rounded-lg"
              >
                <BiDownload size={20} />
              </button>
            </>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
