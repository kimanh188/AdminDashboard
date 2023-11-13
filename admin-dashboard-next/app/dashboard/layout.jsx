import { Navbar } from "../ui/dashboard/navbar/navbarComponent.jsx";
import { Sidebar } from "../ui/dashboard/sidebar/sidebarComponent.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
