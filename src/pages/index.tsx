import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Heading, Stack, Wrap } from "@chakra-ui/core";

import Logo from "@/components/logo";
import type { NextPage } from "next";

import siteConfig from "~/site-config";

const HomePage: NextPage = () => {
  return (
    <>

      <Stack alignItems="center" px={8} spacing={4} textAlign="center" w="full">
        <Logo boxSize="full" maxW={48} />

        <Heading size="2xl">{siteConfig.title}</Heading>
        <Heading fontWeight="normal" pb={8} size="md">
          {siteConfig.description}
        </Heading>
      </Stack>
    </>
  );
};

export default HomePage;
