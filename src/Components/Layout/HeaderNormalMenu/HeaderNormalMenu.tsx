import React from "react";
import classes from "./HeaderNormalMenu.module.css";
import { Container, SimpleGrid, Text } from "@mantine/core";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { Grid } from "@mantine/core";

const HeaderNormalMenu = () => {
  return (
    <>
      <Container size="lg" >
        <SimpleGrid cols={6} className={classes.headerBlackMenu}>
          <Text>PROTEİN</Text>
          <Text>SPOR GIDALARI</Text>
          <Text>SAĞLIK</Text>
          <Text>GIDA</Text>
          <Text>VİTAMİN</Text>
          <Text>TÜM ÜRÜNLER</Text>
        </SimpleGrid>
      </Container>

      {/* <Grid className={classes.headerWhiteMenu}>
        <Grid.Col span={4}>
          <Text>
            <BsFillBoxSeamFill /> <strong>AYNI GÜN KARGO</strong> - 16.00'DAN
            ÖNCEKİ SİPARİŞLERDE
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>
            <FaRegSmile /> <strong>ÜCRETSİZ KARGO</strong> - 100 TL ÜZERİ
            SİPARİŞLERDE
          </Text>
        </Grid.Col>
        <Grid.Col span={4}>
          <Text>
            <VscWorkspaceTrusted /> <strong>GÜVENLİ ALIŞVERİŞ</strong> -
            1.000.000+ MUTLU MÜŞTERİ
          </Text>
        </Grid.Col>
      </Grid> */}
      <div className={classes.headerWhiteMenu}>
        <div>
          <BsFillBoxSeamFill /> <strong>AYNI GÜN KARGO</strong> - 16.00'DAN
          ÖNCEKİ SİPARİŞLERDE
        </div>
        <div>
          <FaRegSmile /> <strong>ÜCRETSİZ KARGO</strong> - 100 TL ÜZERİ
          SİPARİŞLERDE
        </div>
        <div>
          <VscWorkspaceTrusted /> <strong>GÜVENLİ ALIŞVERİŞ</strong> -
          1.000.000+ MUTLU MÜŞTERİ
        </div>
      </div>
    </>
  );
};

export default HeaderNormalMenu;
