import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import {AppProps} from "next/app";
import Head from "next/head";
import {motion, AnimatePresence} from "framer-motion";

import theme from "../styles/theme";
import Layout from "../components/Layout";
const App: React.FC<AppProps> = ({Component, pageProps, router}) => {
  const variants = {
    hidden: {opacity: 0, x: -200, y: 0},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: -100},
  };

  return (
    <>
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        <title>Agustin Mansilla - Portfolio</title>
        <meta content="agustinmme" name="author" />
        <meta content="agustinmme" name="copyright" />
        <meta content="es_ES" property="og:locale" />
        <meta content="Agustin Mansilla - Portfolio" property="og:title" />
        <meta content="Web app NextJS,Typescript,ChakraUI,GoogleSheets" property="og:description" />
        <meta content="https://www.agustinmme.ar/" property="og:url" />
        <meta content="Agustin Mansilla - Portfolio" property="og:site_name" />
        <meta key="ogimage" content={"https://www.agustinmme.ar/preview.png"} property="og:image" />
        <meta content="https://www.agustinmme.ar/preview.png" property="og:image:secure_url" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/site.webmanifest" rel="manifest" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <motion.div
              key={router.pathname}
              animate="enter"
              exit="exit"
              initial="hidden"
              transition={{type: "linear"}}
              variants={variants}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default App;
