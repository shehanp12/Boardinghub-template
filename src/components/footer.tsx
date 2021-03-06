import * as React from "react";

import { Box, Divider, Flex, HStack, Icon, Link, Stack } from "@chakra-ui/core";

import Markdown from "react-markdown";
import NextLink from "next/link";
import { baseRenderer } from "@/utils/renderers";
import routes from "@/routes";
import { useSocials } from "@/hooks/app";

const Footer: React.FC = () => {
  const socials = useSocials();

  const content = `
    Powered By DracosLab(PVT) LTD
  `
    .trim()
    .replace(/\s{3,}/, " ");

  return (
    <Stack as="footer" pb={16} pt={8} spacing={8}>
      <Box px={8}>
        <Divider />
      </Box>
      <Flex
        alignItems="flex-start"
        flexDir="row"
        justifyContent="space-between"
        px={8}
      >
        <Stack spacing={8}>
          <Box>
            <Markdown
              escapeHtml={false}
              renderers={baseRenderer}
              source={content.trim()}
            />
          </Box>
          <HStack spacing={6}>
            {socials.map(([href, SocialIcon]) => (
              <Link href={href} isExternal key={href}>
                <Icon as={SocialIcon} boxSize={5} />
              </Link>
            ))}
          </HStack>
        </Stack>

        <Stack
          d={{ base: "none", sm: "flex" }}
          pl={8}
          spacing={1}
          textAlign="right"
        >

        </Stack>
      </Flex>
    </Stack>
  );
};

export default Footer;
