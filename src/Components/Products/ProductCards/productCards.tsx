import React from "react";
import { Card, Container, Image, SimpleGrid, Text } from "@mantine/core";
import classes from "./productsCards.module.css";
import { IconStarFilled } from "@tabler/icons-react";
import products from "./productDummy.tsx";

// interface ProductCardProps {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   stars: number;
//   comments: number;
//   price: any;
// }

const ProductCard = ({ product }) => {
  return (
    <>
      <Card
        shadow="sm"
        padding="sm"
        component="a"
        href="#"
        // target="_blank"
        justify="center"
        mb="lg"
      >
        <Card.Section>
          <Image src={product.image} h={160} alt="No way!" />
        </Card.Section>
        <Card.Section justify="center" align="center">
          <Text fw={700} size="lg" mt="md">
            {product.title}
          </Text>
          <Text mt="xs" mb="xs" c="dimmed" size="xs" h={40}>
            {product.description}
          </Text>
          <div>
            <IconStarFilled color="yellow" />
            <IconStarFilled color="yellow" />
            <IconStarFilled color="yellow" />
            <IconStarFilled color="yellow" />
            <IconStarFilled color="yellow" />
          </div>
          <Text mt="xs" c="dimmed" size="sm">
            {product.comments} Yorum
          </Text>
          <Text fw={700} mt="xs" mb="md" size="lg">
            {product.price} TL
          </Text>
        </Card.Section>
      </Card>
    </>
  );
};

function ProductList() {
  return (
    <>
      <Container size="lg">
        <div>
          <h3 className={classes.topSellerH3}>ÇOK SATANLAR</h3>
        </div>
        <SimpleGrid cols={6}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default ProductList;
