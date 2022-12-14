import React from "react";
import TrendingScroller from "../components/TrendingScroller";
import { Outlet } from "react-router-dom";
// import Filtersnft from "../components/Filtersnft";
import TableComponentNft from "../components/TableComponentNft";
// import NfthotPicks from "../components/NfthotPicks";

const Nft = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <TrendingScroller />
     {/* <NfthotPicks /> */}
      {/* <Filtersnft /> */}
      <TableComponentNft />
      <Outlet />
    </section>
  );
};

export default Nft;
