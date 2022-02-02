import React from "react";
import "./Topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import profile from "./profile.jpg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN PANEL</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone fontSize="large" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language fontSize="large" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings fontSize="large" />
          </div>
          <img src={profile} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
