import React from "react";
import CoinSelector from "./components/CoinSelector";
import Box from "@mui/material/Box";
import MainDisplay from "./components/MainDisplay";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: "linear-gradient(to top, #1b3562 0%, #261e3e 100%)",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CoinSelector />
      <MainDisplay />
    </Box>
  );
}

export default App;
