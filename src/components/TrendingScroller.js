
import { HorizontalTicker } from "react-infinite-ticker";

import { data } from "autoprefixer";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCointop from "./../components/TrendingCointop";


const TrendingScroller = () => {
  const { trendData } = useContext(TrendingContext);

  return (
    <div>
  <HorizontalTicker duration={25000}>
    <section className=" ">
      <div className="w-full min-h-[0vh] flex justify-evenly ">
        {trendData &&
          trendData.map((coin) => (
            <TrendingCointop key={data.coin_id} data={coin.item} />
          ))}

      </div>
      <Outlet />
    </section>
    </HorizontalTicker>
    </div>
  );
};


export default TrendingScroller;