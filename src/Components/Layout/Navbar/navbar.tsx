import { Autocomplete, Group, Burger, rem, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconPhoto } from "@tabler/icons-react";
import classes from "./navbar.module.css";

function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <a href="index.html">
            <img src="/src/assets/LOGO_Siyah.png"></img>
          </a>
        </Group>
        <Group>
          <Autocomplete
            className={classes.search}
            placeholder="Aradığınız ürünü yazınız"
            visibleFrom="xs"
          />
        </Group>
        <Button className={classes.button}>ARA</Button>
        <Button leftSection={<IconPhoto size={14} />}className={classes.button} variant="outline" color="gray">HESAP</Button>
        <Button leftSection={<IconPhoto size={14} />} className={classes.button} variant="outline">
          SEPET
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
