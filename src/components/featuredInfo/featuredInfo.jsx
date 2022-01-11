import React from "react";
import "./featuredInfo.css";
import { ArrowDownward } from "@material-ui/icons";

export default function featuredInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        feature
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,1456</span>
          <span className="featuredMoneyRate">
            +3.456
            <ArrowDownward />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
