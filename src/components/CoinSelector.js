import React from "react";
import { useState } from "react";
import { createTheme, FormControl, MenuItem, Select, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1b7798",
      contrastText: "#fff",
    },
  },
});

export default function CoinSelector() {
  const [crypto, setCrypto] = useState("");

  const handleChange = (event) => {
    setCrypto(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 400 }}>
        <ThemeProvider theme={theme}>
          <Select
           value={crypto}
           onChange={handleChange}
           displayEmpty
           style={{ 
            border: '2px solid #1b7798',
            borderRadius: '30px',
            fontWeight: 'bold',
            padding: '5px 10px 5px 10px',
            }}
           sx={{
            color: theme.palette.primary.main,
            "& .MuiSelect-icon": {
              color: theme.palette.primary.main,
            },
           }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Etherium-ETH">ETHERIUM - ETH</MenuItem>
            <MenuItem value="Bitcoin-BTC">BITCOIN - BTC</MenuItem>
          </Select>
        </ThemeProvider>
      </FormControl>
    </Box>
  );
};