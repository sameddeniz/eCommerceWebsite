import React from "react";
import classes from "./HeaderNormalMenu.module.css";
import { Container, SimpleGrid, Text, UnstyledButton } from "@mantine/core";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const HeaderNormalMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ width: "100%", backgroundColor: "black" }}>
        <Container size="lg">
          <SimpleGrid cols={6} className={classes.headerBlackMenu}>
            <UnstyledButton onClick={() => navigate("/protein")}>
              PROTEİN
            </UnstyledButton>
            <UnstyledButton>SPOR GIDALARI</UnstyledButton>
            <UnstyledButton>SAĞLIK</UnstyledButton>
            <UnstyledButton>GIDA</UnstyledButton>
            <UnstyledButton>VİTAMİN</UnstyledButton>
            <UnstyledButton>TÜM ÜRÜNLER</UnstyledButton>
          </SimpleGrid>
        </Container>
      </div>

      <div style={{ width: "100%", backgroundColor: "#f7f7f7" }}>
        <Container className={classes.headerWhiteMenu}>
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
        </Container>
      </div>
    </>
  );
};

export default HeaderNormalMenu;
