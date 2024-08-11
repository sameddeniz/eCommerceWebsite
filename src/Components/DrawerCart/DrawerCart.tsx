import { Button, Drawer, Text } from "@mantine/core";
import React from "react";
import classes from "./DrawerCart.module.css";
import { FaCaretRight } from "react-icons/fa";

const DrawerCart = ({ opened, onClose }) => {
  return (
    <div>
      <Drawer
        position="right"
        opened={opened}
        onClose={onClose}
        withCloseButton={false}
      >
        <div className={classes.drawerContent}>
          <Text fw={700} size="xl" mb="md" className={classes.drawerTopText}>
            SEPETİM
          </Text>
          <div className={classes.productsInCart}>SEPETTEKİ ÜRÜN GELECEK</div>
          <Button
            rightSection={<FaCaretRight size={28} />}
            className={classes.drawerBottomButton}
          >
            DEVAM ET
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerCart;
