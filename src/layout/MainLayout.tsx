import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className=" flex flex-col flex-1 mt-15 md:mt-0 md:pl-64  transition-all duration-300 ease-in-out">
        <Outlet />
      </div>
    
    </div>
  );
};

export default MainLayout;
