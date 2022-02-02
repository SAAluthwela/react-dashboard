import React from "react";
import "./widgetLg.css";
import image from "../../img/profile.jpg";

export default function widgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle"> Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh"> Customer</th>
          <th className="widgetLgTh"> Date</th>
          <th className="widgetLgTh"> Amount</th>
          <th className="widgetLgTh"> Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={image} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Kelly Hsu</span>
          </td>
          <td className="widgetLgDate"> 2021 - 05 - 10</td>
          <td className="widgetLgAmount"> $ 895</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Approved" />{" "}
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {" "}
            <img src={image} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Kelly Hsu</span>
          </td>
          <td className="widgetLgDate"> 2022 - 01 - 10</td>
          <td className="widgetLgAmount"> $ 500</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Pending" />{" "}
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {" "}
            <img src={image} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Kelly Hsu</span>
          </td>
          <td className="widgetLgDate"> 2021 - 10 - 20</td>
          <td className="widgetLgAmount"> $ 950</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Declined" />{" "}
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {" "}
            <img src={image} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Kelly Hsu</span>
          </td>
          <td className="widgetLgDate"> 2021 - 01 - 31</td>
          <td className="widgetLgAmount"> $ 100</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Approved" />{" "}
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            {" "}
            <img src={image} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Kelly Hsu</span>
          </td>
          <td className="widgetLgDate"> 2021 - 02 - 25</td>
          <td className="widgetLgAmount"> $ 823</td>
          <td className="widgetLgStatus">
            {" "}
            <Button type="Approved" />{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}
