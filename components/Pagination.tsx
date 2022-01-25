import {IconButton, Stack, Text} from "@chakra-ui/react";
import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

interface Props {
  next: () => void;
  back: () => void;
  currentPage: number;
  maxPage: number;
}

const Pagination: React.FC<Props> = ({next, back, currentPage, maxPage}) => {
  const handlerNext = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    next();
  };
  const handlerBack = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    back();
  };

  return (
    <>
      <Stack isInline alignItems={"center"} gap={5} justifyContent={"center"} mt="10">
        <IconButton
          _active={{color: "black", bg: "primary.200"}}
          _hover={{color: "black", bg: "primary.200"}}
          aria-label="Atras"
          color={"black"}
          colorScheme="secondary"
          fontSize="xl"
          icon={<IoIosArrowBack />}
          isDisabled={currentPage === 1}
          variant="ghost"
          onClick={handlerBack}
        />
        <Text _hover={{color: "secondary.600"}} cursor={"default"} fontSize="xl">
          {currentPage}
        </Text>
        <Text _hover={{color: "secondary.600"}} cursor={"default"} fontSize="xl">
          DE
        </Text>
        <Text _hover={{color: "secondary.600"}} cursor={"default"} fontSize="xl">
          {maxPage}
        </Text>
        <IconButton
          _active={{color: "black", bg: "primary.200"}}
          _hover={{color: "black", bg: "primary.200"}}
          aria-label="Adelante"
          color={"black"}
          colorScheme="secondary"
          fontSize="xl"
          icon={<IoIosArrowForward />}
          isDisabled={currentPage === maxPage}
          variant="ghost"
          onClick={handlerNext}
        />
      </Stack>
    </>
  );
};

export default Pagination;
