import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import "./AdminPage.css";

export default function AdminPage() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
