import { Box } from "@mui/material";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import FooterBannerComponent from "../Components/FooterBannerComponent/FooterBannerComponent";

const Layout = ({ element }: { element: JSX.Element }) => {
  return (
    <>
      {" "}
      <Header />
      <Box margin={"auto"} maxWidth={"1200px"}>
        {element}
      </Box>
      <FooterBannerComponent />
      <Footer />
    </>
  );
};

export default Layout;
