import "@mantine/core/styles.css";
import HeaderMegaMenu from "../Components/Layout/HeaderMegaMenu/HeaderMegaMenu";
import HeaderNormalMenu from "../Components/Layout/HeaderNormalMenu/HeaderNormalMenu";
import Navbar from "../Components/Layout/Navbar/navbar";
import { Container, Grid, MantineProvider } from "@mantine/core";
import Footer from "../Components/Layout/Footer/footer";
import LeftMainMenu from "../Components/Accounts/LeftMainMenu/LeftMainMenu";
import OrderedProducts from "../Components/Products/ProductCards/OrderedProducts";

function OrdersPage() {
  return (
    <MantineProvider>
      <Navbar />
      {/* <HeaderMegaMenu /> */}
      <HeaderNormalMenu />
      <Container size="lg">
        <Grid mt="xl">
          <Grid.Col span={3}>
            <LeftMainMenu />
          </Grid.Col>
          <Grid.Col span="auto">
            <OrderedProducts />
          </Grid.Col>
        </Grid>
      </Container>
      <Footer />
    </MantineProvider>
  );
}

export default OrdersPage;
