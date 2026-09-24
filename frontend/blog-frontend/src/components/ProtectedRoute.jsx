import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// If not logged in, send the user to the login page
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
}

export default ProtectedRoute;
