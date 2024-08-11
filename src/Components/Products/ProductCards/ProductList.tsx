import React from "react";
import { Container, SimpleGrid, } from "@mantine/core";
import classes from "./productsCards.module.css";
import ProductCard from "./productCards";
import products12 from "./productDummy12";


function ProductList() {
  return (
    <>
      <Container size="lg">
        <div>
          <h3 className={classes.productListProtein}>PROTEİN</h3>
        </div>
        <SimpleGrid cols={4}>
          {products12.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default ProductList;