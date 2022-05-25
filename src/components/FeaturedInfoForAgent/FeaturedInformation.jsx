import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";

import "./featuredInformation.css";
export default function FeaturedInformation() {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">All Personal</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">24</span>
            <span className="featuredMoneyRate">
              -1.2
              <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredsub">Since the start</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Hooked Personal</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">6</span>
            <span className="featuredMoneyRate">
              +1.1
              <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredsub">Since the start</span>
        </div>
        <div className="featuredItem">
          <span className="featuredTitle">Active Personal</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">18</span>
            <span className="featuredMoneyRate">
              -1.1
              <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredsub">Since the start</span>
        </div>
      </div>
    </div>
  );
}
