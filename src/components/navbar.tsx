import * as React from "react";

import { Heading, HStack, Icon, IconButton, Link, useColorMode } from "@chakra-ui/core";

import { FaMoon } from "react-icons/fa";
import NextLink from "next/link"
import Image from 'next/image'

import { useSocials } from "@/hooks/app";


const Navbar: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const socials = useSocials();

  return (
    <HStack as="nav" fontSize="md" p={4} spacing={0}>
      <NextLink href="/">
        <Link color="FF8A00" fontWeight="bold" href="/" p={4} variant="link">
          <img
            src="/ab.png"
            alt="Reac"
          />

        </Link>
      </NextLink>

      <HStack d={{ base: "none", md: "flex" }} spacing={0}>
        <React.Fragment>
          <NextLink href="/BoardingHub">
            <Link color="FF8A00" fontWeight="bold" href="/BoardingHub" style={{color:'#FF8A00'}}  p={4} variant="link">
              BoardingHub
            </Link>
          </NextLink>
          <NextLink href="/FoodHub">
            <Link color="FF8A00" fontWeight="bold" href="/FoodHub" p={4}  style={{color:'#FF8A00'}} variant="link">
              FoodHub
            </Link>
          </NextLink>
          <NextLink href="/CampusHub">
            <Link color="FF8A00" fontWeight="bold" href="/CampusHub" p={4}  style={{color:'#FF8A00'}} variant="link">
              CampusHub
            </Link>
          </NextLink>
          <NextLink href="/ContactUs">
            <Link color="FF8A00" fontWeight="bold" href="/ContactUs"  style={{color:'#FF8A00'}} p={4} variant="link">
              ContactUs
            </Link>
          </NextLink>





        </React.Fragment>


      </HStack>

      <HStack
        flexGrow={1}
        justify="flex-end"
        p={4}
        spacing={{ base: 0, sm: 2 }}
      >
        {socials.map(([href, SocialIcon]) => (
          <IconButton
            as="a"
            aria-label={href}
            color="currentColor"
            href={href}
            icon={<Icon as={SocialIcon} boxSize={5} />}
            key={href}
            variant="link"
          />
        ))}
        <IconButton
          aria-label="toggle dark mode"
          color="currentColor"
          icon={<Icon as={FaMoon} boxSize={5} />}
          onClick={toggleColorMode}
          variant="link"
        />
      </HStack>
    </HStack>
  );
};

export default Navbar;
