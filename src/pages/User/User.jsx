import React from "react";
import "./user.css";
import image from "../../img/profile.jpg";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
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
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>User Name</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="AnnMary99"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="Ann Mary"
                />
              </div>

              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="London , UK"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="AnnMary97@gmail.com"
                />
              </div>

              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="+1 2345-4395-78"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={image} alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
