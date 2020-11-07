import * as React from "react";

import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Box } from "@chakra-ui/core";

const EmptyPage: NextPage = () => {
  return (
    // <>
    //   <NextSeo title="Empty" />
    // </>i

    <Box p={8}>
      <NextSeo title="Usage" />
      CampusHub
    </Box>
  );
};

export default EmptyPage;
