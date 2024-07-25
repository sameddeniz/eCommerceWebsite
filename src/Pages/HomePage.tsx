import "@mantine/core/styles.css";
import HeroSection from "../Components/HeroSection/heroSection";
import HeaderMegaMenu from "../Components/Layout/HeaderMegaMenu/HeaderMegaMenu";
import HeaderNormalMenu from "../Components/Layout/HeaderNormalMenu/HeaderNormalMenu";
import Navbar from "../Components/Layout/Navbar/navbar";
import { MantineProvider } from "@mantine/core";
import Categories from "../Components/Products/Categories/Categories";
import ProductCards from "../Components/Products/ProductCards/productCards";
import CustomerComments from "../Components/Comments/customerComments";
import AdvFirstImage from "../Components/AdvertisementSection/AdvFirstImage/AdvFirstImage";
import AdvSecondText from "../Components/AdvertisementSection/AdvSecondText/AdvSecondText";
import Footer from "../Components/Layout/Footer/footer";

function HomePage() {
  return (
    <MantineProvider>
      <Navbar />
      {/* <HeaderMegaMenu /> */}
      <HeaderNormalMenu />
      <HeroSection />
      <Categories />
      <ProductCards />
      <AdvFirstImage/>
      <CustomerComments/>
      <AdvSecondText/>
      <Footer/>
    </MantineProvider>
  );
}

export default HomePage;
