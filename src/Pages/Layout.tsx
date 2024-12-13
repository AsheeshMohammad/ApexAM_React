import { Box } from "@mui/material";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Layout = ({ element }: { element: JSX.Element }) => {
  return (
    <>
      {" "}
      <Header />
      <Box margin={"auto"} maxWidth={"1200px"}>
        {element}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
