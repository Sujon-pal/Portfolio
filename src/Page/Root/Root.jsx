import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const Root = () => {
  return (
     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-amber-300">
      <div className="w-11/12 mx-auto pt-4 sticky top-0 z-50">  
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
