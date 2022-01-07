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
          aria-label="Atras"
          colorScheme="secondary"
          fontSize="xl"
          icon={<IoIosArrowBack />}
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
          aria-label="Adelante"
          colorScheme="secondary"
          fontSize="xl"
          icon={<IoIosArrowForward />}
          variant="ghost"
          onClick={handlerNext}
        />
      </Stack>
    </>
  );
};

export default Pagination;
