import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl">Welcome, {user?.email}</h1>
      <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={() => {logout(); navigate("/");}}>Logout</button>
    </div>
  );
};

export default Dashboard;
