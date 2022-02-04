import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>User name</label>
          <input className="" type="text" placeholder="john"></input>
        </div>
        <div className="newUserItem">
          <label>Full Mame</label>
          <input type="text" placeholder="John Parker"></input>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john1234@gmail.com"></input>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder=""></input>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+2 4465-6783-22"></input>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="London ,UK"></input>
        </div>
      </form>
    </div>
  );
}
