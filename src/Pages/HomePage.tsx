import Navbar from "../Components/Layout/Navbar/navbar";
import { Container, MantineProvider } from "@mantine/core";

function HomePage() {
  return (
    <MantineProvider>
      <Container>
        <Navbar />
      </Container>
    </MantineProvider>
  );
}

export default HomePage;
