import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import SweatCustom from "../components/SweatCustom";

function Root() {
  return (
    <div className="frame">
      <Navbar />
      <SweatCustom />
      <div className="w-[90%] mt-10 mx-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Root;
