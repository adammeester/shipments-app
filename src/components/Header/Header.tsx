import { Box, css } from "@chakra-ui/react";

const headerStyles = css({
  backgroundColor: "white",
  padding: "1rem",
  fontSize: "2rem",
  textAlign: "left",
  fontWeight: 700,
  overflow: "hidden",
  display: "flex",
  zIndex: 500,
  height: "5rem",
  width: "100vw",
});

export const Header = () => {
  return (
    <Box css={headerStyles}>
      <Box maxWidth="1124px" margin="0 auto" textAlign={"left"} width="100%">
        COMPANY CO.
      </Box>
    </Box>
  );
};
