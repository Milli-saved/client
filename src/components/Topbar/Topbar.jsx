import React, { useEffect } from "react";
import {
  // NotificationsNone,
  // Language,
  PowerSettingsNew,
} from "@material-ui/icons";

import imgMe from "../../../public/1.jpeg";
import "./Topbar.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../../store/reducer/userReducer";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const [values, setValues] = useState(loggedIn);

  const logoutHandler = () => {
    dispatch(logoutAsync());
  };

  // useEffect(() => {
  //   if (loggedIn) {
  //     return;
  //   } else {
  //     navigate("/");
  //   }
  // }, [loggedIn]);

  // This is another comment on the page.

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Linked</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconsContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
          
            <Language />
            <span className="topIconBadge">2</span>
          </div> */}
          <div className="topbarIconsContainer">
            <Button onClick={logoutHandler} style={{ padding: "0px" }}>
              <PowerSettingsNew />
            </Button>
          </div>
          <img className="topAvatar" src={imgMe} alt="no connection" />
        </div>
      </div>
    </div>
  );
}
