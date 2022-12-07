import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
import { NftProvider } from "../context/NftContext";
import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";

const Home = () => {
  return (
    <CryptoProvider>
      <NftProvider>
      <TrendingProvider>
        <StorageProvider>
          <main
            className="w-full h-full flex flex-col first-letter:
    content-center items-center relative text-white font-poppin
    "
          >
            <div className="w-screen h-screen bg-gray-300 fixed -z-10" />
            <Logo />
            <Navigation />

            <Outlet />
            <div className="footer">© 2022 CryptoDrizzle. All rights reserved </div>
          </main>
        </StorageProvider>
      </TrendingProvider>
      </NftProvider>
    </CryptoProvider>
  );
};

export default Home;
