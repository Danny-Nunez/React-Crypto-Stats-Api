import React from "react";
import { Outlet } from "react-router-dom";
import Filtersnft from "../components/Filtersnft";
import TableComponentNft from "../components/TableComponentNft";

const Nft = () => {
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <Filtersnft />
      <TableComponentNft />
      <Outlet />
    </section>
  );
};

export default Nft;
