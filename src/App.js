import React, { useState } from "react";
import CoinSelector from "./components/CoinSelector";
import Box from "@mui/material/Box";
import MainDisplay from "./components/MainDisplay";

export const Context = React.createContext();

function App() {
  const [crypto, setCrypto] = useState("");

  return (
    <Box
      sx={{
        typography: {
          fontFamily: "Roboto, sans-serif",
          textTransform: 'uppercase',
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
      <Context.Provider value={[crypto, setCrypto]}>
        <CoinSelector />
        <MainDisplay />
      </Context.Provider>
    </Box>
  );
}

export default App;
