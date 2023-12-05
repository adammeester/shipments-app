import { Box, css } from "@chakra-ui/react";
import "./App.css";
import { Shipments } from "./components/Shipments";
import { Header } from "./components/Header";

const pageContainer = css({
  width: "1124px",
  margin: "0 auto",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1.25rem",
  minHeight: "100%",
  position: "relative",
  overflow: "hidden",
});

function App() {
  return (
    <>
      <Header />
      <Box css={pageContainer}>
        <Shipments />
      </Box>
    </>
  );
}

export default App;
