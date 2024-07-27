import {
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  SimpleGrid,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import classes from "./footer.module.css";
import React from "react";

// const data = [
//   {
//     title: "About",
//     links: [
//       { label: "Features", link: "#" },
//       { label: "Pricing", link: "#" },
//       { label: "Support", link: "#" },
//       { label: "Forums", link: "#" },
//     ],
//   },
//   {
//     title: "Project",
//     links: [
//       { label: "Contribute", link: "#" },
//       { label: "Media assets", link: "#" },
//       { label: "Changelog", link: "#" },
//       { label: "Releases", link: "#" },
//     ],
//   },
//   {
//     title: "Community",
//     links: [
//       { label: "Join Discord", link: "#" },
//       { label: "Follow on Twitter", link: "#" },
//       { label: "Email newsletter", link: "#" },
//       { label: "GitHub discussions", link: "#" },
//     ],
//   },
// ];

const Footer = () => {
  // const groups = data.map((group) => {
  //   const links = group.links.map((link, index) => (
  //     <Text<"a">
  //       key={index}
  //       className={classes.link}
  //       component="a"
  //       href={link.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </Text>
  //   ));

  //   return (
  //     <div className={classes.wrapper} key={group.title}>
  //       <Text className={classes.title}>{group.title}</Text>
  //       {links}
  //     </div>
  //   );
  // });

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
