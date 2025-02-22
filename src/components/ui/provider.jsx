"use client";

import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";

export function Provider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Theme appearance="light">
        <ColorModeProvider {...props} />
      </Theme>
    </ChakraProvider>
  );
}
