import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SweatCustom from "../components/SweatCustom";

function Root() {
  return (
    <div className="frame">
      <Navbar />
      <div className="w-[90%] mt-10 mx-auto">
        <Outlet />
      </div>
      <SweatCustom />
      <Footer />
    </div>
  );
}

export default Root;
