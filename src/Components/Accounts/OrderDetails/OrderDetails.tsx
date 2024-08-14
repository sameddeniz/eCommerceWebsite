import React from "react";
import { Button, Grid, Text, Image, Divider } from "@mantine/core";

const OrderDetails = ({ product }) => {
  return (
    <>
      <Grid align="center">
        <Grid.Col span="content">
          <Image
            src={product.image}
            height={150}
            width="auto"
            alt="Product Image"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Text fw={500} size="md">
            {product.title}
          </Text>
          <Text fw={500} size="md">
            {product.price} TL
          </Text>
          <Text size="xs" mb={5}>
            Boyut - 1 x KUTU - 2 x Adet
          </Text>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default OrderDetails;
