import "@mantine/core/styles.css";
import HeaderMegaMenu from "../Components/Layout/HeaderMegaMenu/HeaderMegaMenu";
import HeaderNormalMenu from "../Components/Layout/HeaderNormalMenu/HeaderNormalMenu";
import Navbar from "../Components/Layout/Navbar/navbar";
import { MantineProvider } from "@mantine/core";
import LoginSignupForm from "../Components/LoginSignupForm/LoginSignupForm";

function LoginSignupPage() {
  return (
    <MantineProvider>
      <Navbar />
      {/* <HeaderMegaMenu /> */}
      <HeaderNormalMenu />
      <LoginSignupForm />
    </MantineProvider>
  );
}

export default LoginSignupPage;