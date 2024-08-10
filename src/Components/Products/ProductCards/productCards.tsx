import React from "react";
import { Card, Container, Image, SimpleGrid, Text } from "@mantine/core";
import classes from "./productsCards.module.css";
import { IconStarFilled } from "@tabler/icons-react";
import products from "./productDummy.tsx";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  stars: number;
  comments: number;
  price: any;
}

const productCards: React.FC<ProductCardProps> = (
  id,
  image,
  title,
  description,
  stars,
  comments,
  price
) => {
  // const productData = products.map((product) => {
  //   product.title
  //   console.log(productData);
  // });
  return (
    <>
      <div>
        <h3 className={classes.topSellerH3}>ÇOK SATANLAR</h3>
      </div>
      <Container size="lg">
        <SimpleGrid cols={6}>
          <Card
            shadow="sm"
            padding="sm"
            component="a"
            href="#"
            target="_blank"
            justify="center"
          >
            <Card.Section>
              <Image
                src="/src/assets/topSellers/topSeller1.png"
                h={160}
                alt="No way!"
              />
            </Card.Section>
            <Card.Section justify="center" align="center">
              <Text fw={700} size="lg" mt="md">
                WHEY PROTEİN
              </Text>
              <Text mt="xs" mb="xs" c="dimmed" size="xs">
                EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ
              </Text>
              <div>
                <IconStarFilled color="yellow" />
                <IconStarFilled color="yellow" />
                <IconStarFilled color="yellow" />
                <IconStarFilled color="yellow" />
                <IconStarFilled color="yellow" />
              </div>
              <Text mt="xs" c="dimmed" size="sm">
                9514 Yorum
              </Text>
              <Text fw={700} mt="xs" mb="xs" size="lg">
                599 TL
              </Text>
            </Card.Section>
          </Card>
        </SimpleGrid>
      </Container>
      ;
    </>
  );
};

export default productCards;
