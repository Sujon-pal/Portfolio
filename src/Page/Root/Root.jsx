import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const Root = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-blue-150 to-blue-300">
      <div className="w-11/12 mx-auto pt-4 sticky top-0 z-50">
        <Navbar />
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;