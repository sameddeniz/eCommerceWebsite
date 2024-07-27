import {
  Group,
  Burger,
  Button,
  Container,
  Input,
  SimpleGrid,
  Indicator,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FaCaretDown } from "react-icons/fa";

function Navbar() {
  // const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Container size="lg">
        <header className={classes.header}>
          <Group>
            <a href="index.html">
              <img src="/src/assets/LOGO_Siyah.png"></img>
            </a>
          </Group>
          <Group>
            <Button.Group>
              <Input
                className={classes.searchBar}
                size="md"
                radius="xs"
                placeholder="Aradığınız ürünü yazınız"
              />
              <Button size="md" className={classes.buttonSearch}>
                ARA
              </Button>
            </Button.Group>
            <Button
              leftSection={<VscAccount size={16} />}
              rightSection={<FaCaretDown size={18} />}
              className={classes.buttonAcc}
              variant="outline"
              color="gray"
              size="md"
            >
              HESAP
            </Button>
            <Button className={classes.buttonCart} size="md">
              <Indicator color="red" inline label="0" size={16}>
                <AiOutlineShoppingCart size={20} />
              </Indicator>
              &nbsp;&nbsp;&nbsp;SEPET
            </Button>
          </Group>
        </header>
      </Container>
    </>
  );
}

export default Navbar;
