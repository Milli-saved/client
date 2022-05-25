import React from "react";
import Chart from "../../../components/Chart/Chart";
import FeaturedInfo from "../../../components/FeaturedInfo/FeaturedInfo";

import "./Home.css";
import { userData } from "../../../service/chartData";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User analytics" dataCol={userData} dataKey="activeUser" />
    </div>
  );
}
