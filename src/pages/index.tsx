import * as React from "react";

import { Button, Heading, Link, Stack, Wrap } from "@chakra-ui/core";

import Logo from "@/components/logo";
import type { NextPage } from "next";



const HomePage: NextPage = () => {
  return (
    <>
      <img
        src="/bgimage.png"
        width="100"
        className="center"
        alt="Reac"
      />
      <style jsx>
        {
          `
          .img{
          display:flex;
   justify-content:center; 
   height:300px;
   width:300px;
          
          }
          `
        }
      </style>

      <Stack alignItems="center" px={8} spacing={4} textAlign="center" w="full">
        <Logo boxSize="full" maxW={48} />

        <Heading size="2xl" style={{fontWeight:'800'}} style={{color:'#FF8A00'}} >  CAMPUS</Heading> <Heading size="2xl" style={{fontWeight:'800'}}  >  HUB</Heading>
        <Heading fontWeight="normal" pb={8} size="md">
          We are Under Construction 🚧 . We Will available soon 👷 .
        </Heading>
      </Stack>
    </>
  );
};

export default HomePage;
