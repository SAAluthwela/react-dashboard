import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Description,
  Search,
  People,
  WebAsset,
  ContactSupport,
  History,
  AddToQueue,
  Feedback,
} from "@material-ui/icons";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 classname="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 classname="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <People className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <WebAsset className="sidebarIcon" />
              Web portal
            </li>
            <li className="sidebarListItem">
              <ContactSupport className="sidebarIcon" />
              Technical
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 classname="sidebarTitle">Transactions</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <History className="sidebarIcon" />
              History
            </li>
            <li className="sidebarListItem">
              <AddToQueue className="sidebarIcon" />
              New Transaction
            </li>
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 classname="sidebarTitle">Search</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Search className="sidebarIcon" />
              Quick search
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Description className="sidebarIcon" />
              reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
