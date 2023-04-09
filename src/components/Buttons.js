import { Box, ButtonGroup, Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CurrencyContext } from "../App";


export default function Buttons() {
  const { currency, handleCurrencyChange } = useContext(CurrencyContext);
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "18px",
        border: "3px solid #2eaec8",
        borderRadius: "30px",
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          onClick={() => handleCurrencyChange("GBP")}
          style={{
            width: "200px",
            padding: "15px 10px 15px 10px",
            borderRadius: "30px 0 0 30px",
            color: currency === "GBP" ? "white" : "#2eaec8",
            backgroundImage: currency === "GBP" ? "linear-gradient(90deg, #546ffd 0%, #38c8fe 100%)" : "none",
          }}
        >
          GBP
        </Button>
        <Button
          onClick={() => handleCurrencyChange("USD")}
          style={{
            width: "200px",
            padding: "15px 10px 15px 10px",
            borderRadius: "0 30px 30px 0",
            color: currency === "USD" ? "white" : "#2eaec8",
            backgroundImage: currency === "USD" ? "linear-gradient(90deg, #546ffd 0%, #38c8fe 100%)" : "none",
          }}
        >
          USD
        </Button>
      </ButtonGroup>
    </Box>
  );
}
