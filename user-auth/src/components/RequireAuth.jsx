import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ path: location.pathname }}
      />
    );
  }

  return children;
};

export default RequireAuth;
