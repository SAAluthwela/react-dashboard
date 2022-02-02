import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import { userData } from "../../dummyData";
import { userData2 } from "../../dummyData2";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";

import "./Home.css";

export default function Home() {
  return (
    //testing
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Search Analytics"
        datakey="search_hits"
        grid
        stroke="#5550bd"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
      <Chart
        data={userData2}
        title="Overall Kibana Analytics"
        datakey="search_hits"
        grid
        stroke="#82ca9d"
      />
    </div>
  );
}
