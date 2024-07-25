import { Group, Burger, Button, Container, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  // const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Container size="lg">
        <header className={classes.header}>
          <div className={classes.inner}>
            <Group>
              {/* <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            /> */}
              <a href="index.html">
                <img src="/src/assets/LOGO_Siyah.png"></img>
              </a>
            </Group>
            <Group>
              <Input
                className={classes.searchBar}
                size="md"
                radius="xs"
                placeholder="Aradığınız ürünü yazınız"
              />
            </Group>
            <Button className={classes.buttonSearch}>ARA</Button>
            <Button
              leftSection={<VscAccount size={14} />}
              className={classes.buttonAcc}
              variant="outline"
              color="gray"
            >
              HESAP
            </Button>
            <Button
              leftSection={<AiOutlineShoppingCart size={14} />}
              className={classes.buttonCart}
              // variant="outline"
            >
              SEPET
            </Button>
          </div>
        </header>
      </Container>
    </>
  );
}

export default Navbar;
