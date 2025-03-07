import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout }= useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl">Welcome, {user?.email}</h1>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
