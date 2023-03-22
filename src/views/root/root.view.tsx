import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { rootTheme } from "./root.style";
import Assistant from "../assistant/assistant.view";

function RootView() {
  return (
    <ChakraProvider theme={rootTheme}>
      <Assistant />
    </ChakraProvider>
  );
}

export default RootView;
