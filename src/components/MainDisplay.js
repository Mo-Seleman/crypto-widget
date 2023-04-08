import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App.js";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function MainDisplay() {
  const[ crypto ] = useContext(Context);

  //**  Fetch GBP & USD Price Of Etherium  **//
  const [etheriumGbpPrice, setEtheriumGbpPrice] = useState("");
  const [etheriumUsdPrice, setEtheriumUsdPrice] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=GBP,USD")
      .then((response) => response.json())
      .then((data) => {
        const etheriumGbpPrice = data.quotes.GBP.price;
        setEtheriumGbpPrice(etheriumGbpPrice);
        const etheriumUsdPrice = data.quotes.USD.price;
        setEtheriumUsdPrice(etheriumUsdPrice);
      });
  }, []);

  //**  Fetch GBP & USD Price Of BitCoin  **//
  const [bitcoinGbpPrice, setBitcoinGbpPrice] = useState("");
  const [bitcoinUsdPrice, setBitcoinUsdPrice] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin?quotes=GBP,USD")
      .then((response) => response.json())
      .then((data) => {
        const bitcoinGbpPrice = data.quotes.GBP.price;
        setBitcoinGbpPrice(bitcoinGbpPrice);
        const bitcoinUsdPrice = data.quotes.USD.price;
        setBitcoinUsdPrice(bitcoinUsdPrice);
      });
  }, []);

  return (
    <Box
      style={{
        color: "white",
        minWidth: "400px",
        backgroundImage: "linear-gradient(135deg, #fd79b3 0%, #fd9c9d 100%)",
        borderRadius: "10px",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        Refresh Button
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography>{crypto}</Typography>
        </Box>
            <Box>
                {crypto === 'Etherium - ETH' ? (
                   <p>{etheriumGbpPrice}</p>
                 ) : crypto === 'Bitcoin - BTC' ?
                  (<p>{bitcoinGbpPrice}</p>) : null
                  } 
            </Box>
        </Box>
      </Box>
  );
}

// //** {{ crypto } == "Etherium - ETH" ? (
//     <p>{etheriumGbpPrice}</p>
//     ) : { crypto } == "Bitcoin - BTC" ? (
//       <p>{bitcoinGbpPrice}</p>
//     ) : (
//       <p>No price available for {crypto}</p>
//     )} **//

