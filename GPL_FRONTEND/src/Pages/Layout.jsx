import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Layout() {

  return (
    <>
      <Navbar />
      <div className="px-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout ;
