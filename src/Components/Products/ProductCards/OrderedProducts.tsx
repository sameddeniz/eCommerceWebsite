import React from "react";
import { Container, SimpleGrid, Text } from "@mantine/core";
import classes from "./productsCards.module.css";
import products from "./productDummy.tsx";
import PreviousOrders from "../../Accounts/PreviousOrders/PreviousOrders.tsx";

function OrderedProducts() {
  return (
    <>
      <Container size="lg">
        <Text variant="transparent" fw={600} mt="lg" mb="xl">
          Siparişlerim (4)
        </Text>
        <SimpleGrid>
          {products.map((product) => (
            <PreviousOrders key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default OrderedProducts;
