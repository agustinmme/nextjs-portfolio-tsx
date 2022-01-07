import {Container} from "@chakra-ui/react";
import React from "react";

import Background from "./Background";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <Background />
      <Navbar />
      <Container maxW="2xl">
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
