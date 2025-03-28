import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "@fontsource/outfit";
import "@fontsource/roboto";
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </StrictMode>
);
