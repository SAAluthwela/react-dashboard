import React from "react";
import "./widgetLg.css";

export default function widgetSm() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle"> Latest transactions</h3>
      <table className="widgetLgtable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh"> Customer</th>
          <th className="widgetLgTh"> Date</th>
          <th className="widgetLgTh"> Amount</th>
          <th className="widgetLgTh"> Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser"> Kelly Hsu</td>
          <td className="widgetLgDate"> 2021 - 05 - 10</td>
          <td className="widgetLgAmount"> $ 895</td>
          <td className="widgetLgStatus"> Paid </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser"> Lakmal Perera</td>
          <td className="widgetLgDate"> 2022 - 01 - 10</td>
          <td className="widgetLgAmount"> $ 500</td>
          <td className="widgetLgStatus"> Paid </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser"> Chistena Mary</td>
          <td className="widgetLgDate"> 2021 - 10 - 20</td>
          <td className="widgetLgAmount"> $ 950</td>
          <td className="widgetLgStatus"> Pending </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser"> Kelly Hsu</td>
          <td className="widgetLgDate"> 2021 - 01 - 31</td>
          <td className="widgetLgAmount"> $ 100</td>
          <td className="widgetLgStatus"> Paid </td>
        </tr>
      </table>
    </div>
  );
}
