
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>This route does not exist.</p>

      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFound;