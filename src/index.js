import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Container from "@mui/material/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <App />
    </Container>
  </React.StrictMode>
);
