const descriptionMd = `
  We are Under Construction.Stay Tuned
`;

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, "$1")
  .replace(/\n/g, "")
  .replace(/\s{2,}/g, " ")
  .trim();

module.exports = {
  title: "CAMPUSHUB",
  descriptionMd,
  description,
  url: "https://nextplate.now.sh",
  twitterUsername: "@griko_nibras",
  email: "hello@griko.id",
  socials: {
    GitHub: "https://github.com/shehanp12",
    Twitter: "https://twitter.com/griko_nibras",
  },
  themeColor: "#F6E05E",
};
