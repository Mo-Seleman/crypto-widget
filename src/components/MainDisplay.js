import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function MainDisplay() {
  return (
    <Box
      style={{
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
      <Box>
        <Typography>This Needs To The The Select State</Typography>
      </Box>
    </Box>
  );
}


