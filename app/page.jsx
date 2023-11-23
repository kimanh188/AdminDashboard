import LoginPage from "@/app/login/page.jsx";

const Homepage = ({ session }) => {
  // If the user is authenticated, render the dashboard page
  if (session?.user) {
    return <div>Dashboard</div>;
  }

  // If the user is not authenticated, render the login page
  return <LoginPage />;
};

export default Homepage;
