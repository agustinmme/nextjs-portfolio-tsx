import {Box, BoxProps} from "@chakra-ui/react";
import React from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import useSound from "use-sound";

const Confetti: React.FC<BoxProps> = ({children}) => {
  const [play] = useSound("/assets/audios/confetti.mp3");
  const handlerClick = () => {
    play();
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 0.5,
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    });
  };

  return (
    <Box
      onClick={() => {
        handlerClick();
      }}
    >
      {children}
    </Box>
  );
};

export default Confetti;
