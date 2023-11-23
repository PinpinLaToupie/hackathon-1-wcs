import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="frame">
      <Header />
      <div className="w-[90%] mt-10 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
