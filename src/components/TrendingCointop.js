import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCointop = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <div
      className="lg:w-[40%] sm:w-[30%] w-[30%] mb-0
    last:mb-0 rounded-lg p-0 relative cursor-pointer
    hover:bg-gray-100 hover:bg-opacity-40
    "
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          <h3 className="txt-base flex items-center px-2">
            
            <span className="text-cyan">{data.symbol}</span>
            <img
              src={data.small}
              alt={data.name}
              className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full"
            />
          </h3>

          
          <h3 className="px-2 txt-base flex items-center my-0.5">
            
            <span className="text-cyan">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>

          

          
        </>
      ) : (
        <div
          className="w-full  h-full flex justify-center items-center
             "
        >
          
          <span className="ml-2">please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCointop;
