import "@mantine/core/styles.css";
import HeaderMegaMenu from "../Components/Layout/HeaderMegaMenu/HeaderMegaMenu";
import HeaderNormalMenu from "../Components/Layout/HeaderNormalMenu/HeaderNormalMenu";
import Navbar from "../Components/Layout/Navbar/navbar";
import { MantineProvider } from "@mantine/core";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Layout/Footer/footer";
import FaqSection from "../Components/FAQ/faqPage";

function ContactPage() {
  return (
    <MantineProvider>
      <Navbar />
      {/* <HeaderMegaMenu /> */}
      <HeaderNormalMenu />
      <FaqSection />
      <ContactForm />
      <Footer />
    </MantineProvider>
  );
}

export default ContactPage;