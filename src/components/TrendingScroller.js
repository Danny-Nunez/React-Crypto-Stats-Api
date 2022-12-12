
import { HorizontalTicker } from "react-infinite-ticker";
import { data } from "autoprefixer";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCointop from "./../components/TrendingCointop";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const TrendingScroller = () => {
  const { trendData } = useContext(TrendingContext);

  return (
    <div>
      <div className="flex justify-center text-5xl font-extrabold"> <span class="pt-3">HOT PICKS</span> <Player
  autoplay loop src="https://assets10.lottiefiles.com/packages/lf20_x816xbgp.json"
  style={{ height: '40px', width: '40px' }}>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player></div>
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