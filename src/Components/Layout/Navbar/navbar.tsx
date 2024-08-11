import {
  Group,
  Button,
  Container,
  Input,
  Indicator,
  Text,
  Popover,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FaCaretDown } from "react-icons/fa";
import DrawerCart from "../../DrawerCart/DrawerCart";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const navigate = useNavigate();

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
            <Popover
              width={150}
              trapFocus
              position="bottom"
              withArrow
              shadow="md"
              justify="space-between"
            >
              <Popover.Target>
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
              </Popover.Target>
              <Popover.Dropdown>
                <Flex
                  justify="center"
                  align="center"
                  direction="column"
                  className={classes.buttonLoginSignup}
                >
                  <Button
                    onClick={() => navigate("/login")}
                    variant="subtle"
                    color="gray"
                    size="md"
                    mb="md"
                  >
                    ÜYE GİRİŞİ
                  </Button>
                  <Button
                    onClick={() => navigate("/login")}
                    variant="subtle"
                    color="gray"
                    size="md"
                  >
                    ÜYE OL
                  </Button>
                </Flex>
              </Popover.Dropdown>
            </Popover>
            {/* <Button
              leftSection={<VscAccount size={16} />}
              rightSection={<FaCaretDown size={18} />}
              className={classes.buttonAcc}
              variant="outline"
              color="gray"
              size="md"
            >
              HESAP
            </Button> */}

            <Button onClick={toggle} className={classes.buttonCart} size="md">
              <Indicator color="red" inline label="0" size={16}>
                <AiOutlineShoppingCart size={20} />
              </Indicator>
              &nbsp;&nbsp;&nbsp;SEPET
            </Button>
          </Group>
        </header>
      </Container>
      <DrawerCart opened={opened} onClose={close} />
    </>
  );
}

export default Navbar;
