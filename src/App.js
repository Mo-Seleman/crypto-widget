import React, { useState } from "react";
import CoinSelector from "./components/CoinSelector";
import Box from "@mui/material/Box";
import MainDisplay from "./components/MainDisplay";
import Buttons from "./components/Buttons";

export const CryptoContext = React.createContext();
export const CurrencyContext = React.createContext();

function App() {
  const [crypto, setCrypto] = useState("");
  const [currency, setCurrency] = useState("GBP");

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  return (
    <Box
      sx={{
        typography: {
          fontFamily: "Roboto, sans-serif",
          textTransform: "uppercase",
        },
        width: "100%",
        height: "100%",
        backgroundImage: "linear-gradient(to top, #1b3562 0%, #261e3e 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CryptoContext.Provider value={[crypto, setCrypto]}>
        <CurrencyContext.Provider value={{ currency, handleCurrencyChange }}>
          <CoinSelector />
          <MainDisplay />
          <Buttons />
        </CurrencyContext.Provider>
      </CryptoContext.Provider>
    </Box>
  );
}

export default App;
