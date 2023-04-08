import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App.js";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function MainDisplay() {
  const [crypto] = useContext(Context);
  const [gbpPrice, setGbpPrice] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=GBP,USD")
      .then((response) => response.json())
      .then((data) => {
        const gbpPrice = data.quotes.GBP.price;
        setGbpPrice(gbpPrice);
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
          <p>{gbpPrice}</p>
        </Box>
      </Box>
    </Box>
  );
}
