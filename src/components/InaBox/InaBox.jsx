import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";

import "./inabox.css";
export default function FeaturedInfo() {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">Purchases</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">1,220ETB</span>
            <span className="featuredMoneyRate">
              -11.2
              <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredsub">Since the start</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Sells</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">76</span>
            <span className="featuredMoneyRate">
              +1.1
              <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredsub">Since the start</span>
        </div>
      </div>
    </div>
  );
}
