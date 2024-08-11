import "@mantine/core/styles.css";
import HeaderMegaMenu from "../Components/Layout/HeaderMegaMenu/HeaderMegaMenu";
import HeaderNormalMenu from "../Components/Layout/HeaderNormalMenu/HeaderNormalMenu";
import Navbar from "../Components/Layout/Navbar/navbar";
import { MantineProvider } from "@mantine/core";
import Footer from "../Components/Layout/Footer/footer";
import ProductList from "../Components/Products/ProductCards/ProductList";

function ProteinPage() {
  return (
    <MantineProvider>
      <Navbar />
      {/* <HeaderMegaMenu /> */}
      <HeaderNormalMenu />
      <ProductList />
      <Footer />
    </MantineProvider>
  );
}

export default ProteinPage;
