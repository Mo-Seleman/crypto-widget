import React from "react";
import CoinSelector from "./components/CoinSelector";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}>
      <Box sx={{ width: '100%', height: '100%',  backgroundImage: 'linear-gradient(to top, #1b3562 0%, #261e3e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CoinSelector />
      </Box>
    </Container>
  );
}

export default App;

