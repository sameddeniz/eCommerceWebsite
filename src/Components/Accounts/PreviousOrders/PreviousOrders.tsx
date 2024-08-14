import React from "react";
import { Button, Grid, Text, Image, Divider } from "@mantine/core";

const PreviousOrders = ({ product }) => {
  return (
    <>
      <Grid align="center">
        <Grid.Col span="content">
          <Image
            src={product.image}
            height={80}
            width="auto"
            alt="Product Image"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Text color="green" fw={400} size="xs">
            Teslim Edildi
          </Text>
          <Text fw={500} size="md">
            {product.title}
          </Text>
          <Text size="xs" mb={5}>
            19 Temmuz 2024 Tarihinde Sipariş Verildi
          </Text>
          <Text size="xs">
            XXXXXX Numaralı Sipariş
          </Text>
        </Grid.Col>
        <Grid.Col span="auto">
          <Button variant="outline" color="rgba(0, 0, 0, 1)" fw={700} size="md">
            Detayı Görüntüle
          </Button>
        </Grid.Col>
      </Grid>
      <Divider my="md" size={1} color="black" />
    </>
  );
};

export default PreviousOrders;
