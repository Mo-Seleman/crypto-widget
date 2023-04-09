import React, { useState, useEffect } from "react";
import CoinSelector from "./components/CoinSelector";
import Box from "@mui/material/Box";
import MainDisplay from "./components/MainDisplay";
import Buttons from "./components/Buttons";

export const CryptoContext = React.createContext();
export const CurrencyContext = React.createContext();

function App() {
  const [crypto, setCrypto] = useState(() => {
    const storedCrypto = localStorage.getItem('COIN_PREFERENCE');
    return storedCrypto !== null ? JSON.parse(storedCrypto) : "Etherium - ETH";
  });

  const [currency, setCurrency] = useState(() => {
    const storedCurrency = localStorage.getItem('CURRENCY_PREFERENCE');
    return storedCurrency !== null ? JSON.parse(storedCurrency) : "GBP";
  });

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  /** Local Storage **/
  useEffect(() => {
    window.localStorage.setItem("COIN_PREFERENCE", JSON.stringify(crypto));
  }, [crypto]);

  useEffect(() => {
    window.localStorage.setItem("CURRENCY_PREFERENCE", JSON.stringify(currency));
  }, [currency]);

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
