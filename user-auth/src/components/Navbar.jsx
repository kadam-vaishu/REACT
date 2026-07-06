import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div className="navbar">
      <h2>Auth Demo</h2>

      <div>
        <Link to="/">Home</Link>

        {auth.user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <span style={{ margin: "0 10px" }}>
              👤 {auth.user}
            </span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;