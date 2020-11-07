import * as React from "react";
import { Heading, Stack} from "@chakra-ui/core";
import Logo from "@/components/logo";
import type { NextPage } from "next";



const HomePage: NextPage = () => {
  return (
    <>
      <img
        src="/bgimage.png"
        height="50"
        width="400"
        alt="Reac"
        style={{ textAlign: "center" }}
      />


      <Stack alignItems="center" px={8} spacing={4} textAlign="center" w="full">
        <Logo boxSize="full" maxW={48} />

        <Heading size="2xl" style={{fontWeight:'800'}} style={{color:'#FF8A00'}} >  CAMPUS</Heading>
        <Heading size="2xl" style={{fontWeight:'800'}}  >  HUB</Heading>
        <Heading fontWeight="normal" pb={8} size="md">
          We are Under Construction 🚧 . We Will available soon 👷 .
        </Heading>
      </Stack>
    </>
  );
};



export default HomePage;
