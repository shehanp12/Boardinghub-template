/* eslint-disable import/prefer-default-export */

import { FaFacebook, FaTwitter } from "react-icons/fa";

import type { IconType } from "react-icons/lib";
import siteConfig from "~/site-config";

export function useSocials() {
  const socials: [string, IconType][] = [
    [siteConfig.socials.Facebook,FaFacebook],
    [siteConfig.socials.Twitter, FaTwitter],

  ];

  return socials;
}
