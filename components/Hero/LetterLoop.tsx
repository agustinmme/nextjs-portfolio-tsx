import React, {useState, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Box, Heading} from "@chakra-ui/react";

interface Props {}

const texts = ["x", "a", "o"];

const variants = {
  enter: () => {
    return {
      y: -20,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

const LetterLoop: React.FC<Props> = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let isSubscribed = true;

    setTimeout(() => {
      let next = index + 1;

      if (isSubscribed) {
        if (next === texts.length) {
          next = 0;
        }
        setIndex(next);
      }
    }, 3 * 1000);

    return () => {
      isSubscribed = false;
    };
  }, [index, setIndex]);

  return (
    <Box>
      <AnimatePresence>
        <motion.span
          key={index}
          animate="center"
          exit="exit"
          initial="enter"
          style={{position: "absolute"}}
          transition={{
            y: {type: "spring", stiffness: 300, damping: 100},
            opacity: {duration: 0.5},
          }}
          variants={variants}
        >
          <Heading
            color="primary.200"
            fontSize={{base: "4xl", md: "6xl", lg: "7xl"}}
            fontWeight={"700"}
          >
            {texts[index]}
          </Heading>
        </motion.span>
      </AnimatePresence>
    </Box>
  );
};

export default LetterLoop;
