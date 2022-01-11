import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
}
