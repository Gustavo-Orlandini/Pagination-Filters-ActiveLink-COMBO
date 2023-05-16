import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes/Routes";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>

    </ChakraProvider>
  );
}

export default App;