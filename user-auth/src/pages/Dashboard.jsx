import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const auth = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Welcome {auth.user}</p>

      <button onClick={handleLogout}>Sign Out</button>

      <p>Path: {location.pathname}</p>
    </div>
  );
};

export default Dashboard;