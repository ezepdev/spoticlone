import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const RequireAuth = ({ children }) => {
  const access_token = useAuth();
  if (access_token === undefined) return <Navigate to="/login" />;
  return children;
};

export { RequireAuth };
