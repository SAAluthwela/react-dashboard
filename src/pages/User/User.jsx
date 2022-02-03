import React from "react";
import "./user.css";
import image from "../../img/profile.jpg";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
} from "@material-ui/icons";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userShowTop">
            <img src={image} alt="" className="userShowImg"></img>
            <div className="userShowTopTitle">
              <span className="userShowName">Ann Mary</span>
              <span className="UserShowJobTitle">Full Stack Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Annmary99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">1997.10.12</span>
            </div>

            <span className="userShowTitle">Contact details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 1253-8827-89</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">Annmary97@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">London, UK</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}
