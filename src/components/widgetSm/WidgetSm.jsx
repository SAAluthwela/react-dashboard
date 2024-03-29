import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import image from "./profile.jpg";

export default function widgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New joined members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={image} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUername">Kelly Hsu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetIcon" />
            <span className="btnTitle"> Display</span>
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={image} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUername">Kelly Hsu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetIcon" />
            <span className="btnTitle"> Display</span>
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={image} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUername">Kelly Hsu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetIcon" />
            <span className="btnTitle"> Display</span>
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={image} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUername">Kelly Hsu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetIcon" />
            <span className="btnTitle"> Display</span>
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={image} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUername">Kelly Hsu</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetIcon" />
            <span className="btnTitle"> Display</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
