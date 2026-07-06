import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    if (!name.trim()) return;

    auth.login(name);
    navigate(redirectPath, { replace: true });
  };

  useEffect(() => {
    console.log("auth user:", auth.user);
  }, [auth.user]);

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;