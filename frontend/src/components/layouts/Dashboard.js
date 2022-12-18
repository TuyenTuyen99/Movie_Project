import { Outlet } from "react-router-dom";
import Footer from "../../components/main/footer/Footer";
import TopNavigation from "../../components/main/topNavigation/TopNavigation";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <TopNavigation />
      {children}

      {/* must add Outlet here to render the next component-child in children */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default DashboardLayout;
