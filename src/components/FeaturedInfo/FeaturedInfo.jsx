import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";

import "./featuredinfo.css";
export default function FeaturedInfo() {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">User</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">40</span>
            <span className="featuredMoneyRate">
              +2
              <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredsub">compared to last week</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Profit</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">150ETB</span>
            <span className="featuredMoneyRate">
              -11.2
              <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="fefeaturedsubaturedsub">compared to last week</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Agents</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">5</span>
            <span className="featuredMoneyRate">
              +1.1
              <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredsub">compared to last week</span>
        </div>
      </div>
    </div>
  );
}
