import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/featuredInfo";
import { userData } from "../../dummyData";
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
        title="Search Analytics"
        datakey="search_hits"
        grid
      />
      <div className="homeWidgets">
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
}
