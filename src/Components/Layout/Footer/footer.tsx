import { Text, Container, SimpleGrid } from "@mantine/core";
import classes from "./footer.module.css";
import React from "react";


const Footer = () => {
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#222222" }}>
        <Container size="lg">
          <SimpleGrid cols={3} className={classes.footer}>
            <div>
              <a href="index.html">
                <img src="/src/assets/LOGO_Beyaz.png"></img>
              </a>
            </div>
            <Text className={classes.description}>Kategoriler</Text>
            <Text className={classes.description}>Popüler Ürünler</Text>
          </SimpleGrid>
          <SimpleGrid cols={3}>
            <div>
              <Text size="xs" c="dimmed">
                <Text>İletişim</Text>
                <Text>Hakkımızda</Text>
                <Text>Sıkça Sorulan Sorular</Text>
                <Text>KVKK</Text>
                <Text>Çalışma İlkelerimiz</Text>
                <Text>Satış Sözleşmesi</Text>
                <Text>Garanti ve İade Koşulları</Text>
                <Text>Gerçek Müşteri Yorumları</Text>
                <Text>Blog</Text>
              </Text>
            </div>
            <div>
              <Text size="xs" c="dimmed">
                <Text>Protein</Text>
                <Text>Spor Gıdaları</Text>
                <Text>Sağlık</Text>
                <Text>Gıda</Text>
                <Text>Vitamin</Text>
                <Text>Aksesuar</Text>
                <Text>Tüm Ürünler</Text>
                <Text>Paketler</Text>
                <Text>Lansmana Özel Fırsatlar</Text>
              </Text>
            </div>
            <div>
              <Text size="xs" c="dimmed">
                <Text>Whey Protein</Text>
                <Text>Cream of Rice</Text>
                <Text>Creatine</Text>
                <Text>BCAA+</Text>
                <Text>Pre-Workout</Text>
                <Text>Fitness Paketi</Text>
                <Text>Collagen</Text>
                <Text>Günlük Vitamin Paketi</Text>
                <Text>ZMA</Text>
              </Text>
            </div>
          </SimpleGrid>
          <Text c="dimmed" size="sm" mb="0" className={classes.copyright}>
            Copyright © SAMED DENİZ - All rights reserved 2024.
          </Text>
        </Container>
      </div>
    </>
  );
};

export default Footer;
