import React from "react";
import { Container, SimpleGrid } from "@mantine/core";
import classes from "./productsCards.module.css";
import products from "./productDummy.tsx";
import ProductCard from "./productCards.tsx"

function TopSellers() {
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

export default TopSellers;
