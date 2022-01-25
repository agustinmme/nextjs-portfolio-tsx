import React from "react";
import {useToast as useChakraToast, UseToastOptions} from "@chakra-ui/react";

export function useToast() {
  const toast = useChakraToast();

  return React.useCallback(
    ({title, description, status, duration = 3000}: UseToastOptions) =>
      toast({
        title,
        description,
        status,
        position: "top-right",
        duration: duration,
        isClosable: true,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
}
