import {
  LineStyle,
  Timeline,
  Add,
  Fingerprint,
  Security,
  LocalTaxi,
  Work,
  RoomService,
  ShoppingCart,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const { unverified } = useSelector((state) => state.product);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <nav>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcons" />
                  Home
                </li>
              </Link>
              <Link
                to="/home/useranalytics"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcons" />
                  User Analytics
                </li>
              </Link>
            </nav>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link
              to="/home/ecommerce"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sidebarListItem">
                <ShoppingCart className="sidebarIcons" />
                Ecommerce
              </li>
            </Link>
            <Link
              to="/home/fooddelivery"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sidebarListItem">
                <RoomService className="sidebarIcons" />
                Food Delivery
              </li>
            </Link>
            <Link
              to="/home/freelance"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sidebarListItem">
                <Work className="sidebarIcons" />
                Hire Help
              </li>
            </Link>
            <Link
              to="/home/taxi"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sidebarListItem">
                <LocalTaxi className="sidebarIcons" />
                Taxi
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link
              to="/home/verifyitem"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sidebarListItem sidecontainer">
                <Fingerprint className="sidebarIcons" />
                <span className="sideIconBadge">{unverified}</span>
                Verify Items
              </li>
            </Link>
            <Link
              to="/home/verifyorganization"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sidebarListItem sidecontainer">
                <Security className="sidebarIcons" />
                <span className="sideIconBadge">4</span>
                Verify Organization
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link
              to="/home/adddriver"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sidebarListItem">
                <Add className="sidebarIcons" />
                Add Driver
              </li>
            </Link>
            <Link
              to="/home/adddeliveryperson"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="sidebarListItem">
                <Add className="sidebarIcons" />
                Add Delivery Person
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
