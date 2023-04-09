import React, { useContext, useEffect, useState } from "react";
import { CryptoContext, CurrencyContext } from "../App.js";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function MainDisplay() {
  const [crypto] = useContext(CryptoContext);

  //**  Fetch GBP & USD Price Of Etherium  **//
  const [etheriumGbpPrice, setEtheriumGbpPrice] = useState("");
  const [etheriumUsdPrice, setEtheriumUsdPrice] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=GBP,USD")
      .then((response) => response.json())
      .then((data) => {
        const etheriumGbpPrice = data.quotes.GBP.price.toFixed(2);
        setEtheriumGbpPrice(etheriumGbpPrice);
        const etheriumUsdPrice = data.quotes.USD.price.toFixed(2);
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
        const bitcoinGbpPrice = data.quotes.GBP.price.toFixed(2);
        setBitcoinGbpPrice(bitcoinGbpPrice);
        const bitcoinUsdPrice = data.quotes.USD.price.toFixed(2);
        setBitcoinUsdPrice(bitcoinUsdPrice);
      });
  }, []);

  /** Currency Symbol **/
  const { currency } = useContext(CurrencyContext);

  return (
    <Box
      style={{
        color: "white",
        minWidth: "400px",
        backgroundImage: "linear-gradient(135deg, #fd79b3 0%, #fd9c9d 100%)",
        borderRadius: "10px",
        marginTop: "10px",
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
        <Box
          style={{
            display: "flex",
            fontSize: 50,
          }}
        >
          <Box style={{ padding: "7px 4px 0 0", fontWeight: 700 }}>
            {currency === "GBP" ? "£" : "$"}
          </Box>
          <Box
            style={{
              fontSize: 50,
              fontWeight: 700,
              padding: "7px 0 55px 0",
            }}
          >
            {crypto === "Etherium - ETH" && currency === "GBP" && (
              <p>{etheriumGbpPrice}</p>
            )}
            {crypto === "Etherium - ETH" && currency === "USD" && (
              <p>{etheriumUsdPrice}</p>
            )}
            {crypto === "Bitcoin - BTC" && currency === "GBP" && (
              <p>{bitcoinGbpPrice}</p>
            )}
            {crypto === "Bitcoin - BTC" && currency === "USD" && (
              <p>{bitcoinUsdPrice}</p>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
