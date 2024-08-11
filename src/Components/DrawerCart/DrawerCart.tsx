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
          </Text><hr />
          <div className={classes.productsInCart}>SEPETTEKİ ÜRÜN GELECEK</div>
          <div className={classes.drawerSumTextAndButton}>
            <Text fw={700} size="md" className={classes.drawerSumText}>
              TOPLAM 499 TL
            </Text>
            <Button
              rightSection={<FaCaretRight size={28} />}
              className={classes.drawerBottomButton}
            >
              DEVAM ET
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerCart;
