import "@mantine/core/styles.css";
import HeaderMegaMenu from "../Components/Layout/HeaderMegaMenu/HeaderMegaMenu";
import HeaderNormalMenu from "../Components/Layout/HeaderNormalMenu/HeaderNormalMenu";
import Navbar from "../Components/Layout/Navbar/navbar";
import { MantineProvider } from "@mantine/core";
import Footer from "../Components/Layout/Footer/footer";
import AboutUs from "../Components/AboutUs/AboutUs";

function AboutUsPage() {
  return (
    <MantineProvider>
      <Navbar />
      {/* <HeaderMegaMenu /> */}
      <HeaderNormalMenu />
      <AboutUs />
      <Footer />
    </MantineProvider>
  );
}

export default AboutUsPage;