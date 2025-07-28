// src/pages/admin/AdminLogout.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogout } from "../../services/api"; // adjust import as needed

const AdminLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      await adminLogout();
      navigate("/admin/login", { replace: true });
    };
    doLogout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-64">
      <span className="text-gray-500">Logging out...</span>
    </div>
  );
};

export default AdminLogout;
