import { extendTheme } from "@chakra-ui/core";
import { mode } from "@chakra-ui/theme-tools";

const sans = ["Roboto"];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const mono = [
//   "Cousine",
//   "Consolas",
//   "'Courier New'",
//   "Courier",
//   "monospace",
// ].join(",");

export default extendTheme({
  components: {
    Link: {
      variants: {
        link: (props) => ({
          color: mode("FF8A00", "FF8A00")(props),
        }),
      },
    },
  },
  fonts: {
    body: sans,
    heading: sans,
  },
});
