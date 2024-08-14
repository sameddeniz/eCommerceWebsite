import React from "react";
import {
  Container,
  Divider,
  Grid,
  SimpleGrid,
  Text,
  UnstyledButton,
} from "@mantine/core";
import classes from "./productsCards.module.css";
import products from "./productDummy.tsx";
import OrderDetails from "../../Accounts/OrderDetails/OrderDetails.tsx";

function OrderDetailsMap() {
  return (
    <>
      <Container size="lg">
        <Grid>
          <Grid.Col span={8}>
            <Text variant="transparent" fw={600} mt="lg" mb="xs">
              Sipariş teslim edildi
            </Text>
            <Text size="xs" mb={5}>
              19 Temmuz 2024 Tarihinde Sipariş Verildi, XXXXXX Numaralı Sipariş
            </Text>
            <Divider my="md" size={1} color="black" />
            <SimpleGrid>
              {products.map((product) => (
                <OrderDetails key={product.id} product={product} />
              ))}
            </SimpleGrid>
            <Divider my="md" size={1} color="black" />
            <Text size="sm" mb={70}>
              HepsiJet Takip Numarası: ABA76DSFDBSA6
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Text variant="transparent" fw={600} mt="lg" mb="xs">
              <br />
            </Text>
            <Text size="xs" mb={5}>
              <br />
            </Text>
            <Divider my="md" size={1} color="black" />
            <Text fw={700} size="md" mb={5}>
              Adres
            </Text>
            <Text size="md" mb={5}>
              Samed Deniz
            </Text>
            <Text td="underline" size="md" mb={5}>
              Barbaros, Nidakule Ataşehir Batı, Begonya Sk. No: 1/2, 34746
              Ataşehir/İstanbul
            </Text>
            <Divider my="md" size={1} color="black" />
            <Text fw={700} size="md" mb={5}>
              Ödeme
            </Text>
            <Text size="md" mb={5}>
              Kredi Kartı - 770 TL
            </Text>
            <Text size="md" mb={5}>
              ****-****-****-**54
            </Text>
            <Divider my="md" size={1} color="black" />
            <Text fw={700} size="md" mb={5}>
              ÖZET
            </Text>
            <Grid>
              <Grid.Col span="auto">
                <Text size="md" mb={5}>
                  <Text>Ara Toplam</Text>
                  <Text>Kargo</Text>
                  <Text>Vergi</Text>
                  <Text>Yüzde 10 İndirim!</Text>
                  <Text fw={600}>TOPLAM</Text>
                </Text>
              </Grid.Col>
              <Grid.Col span="content">
                <Text ta="right" size="md" mb={5}>
                  <Text>856 TL</Text>
                  <Text>0 TL</Text>
                  <Text>8 TL</Text>
                  <Text>-86 TL</Text>
                  <Text fw={600}>770 TL</Text>
                </Text>
              </Grid.Col>
            </Grid>
            <Divider my="md" size={1} color="black" />
            <Text fw={700} size="lg" mb={5}>
              Yardıma mı ihtiyacın var?
            </Text>
            <Text fw={600} size="md" mb={5}>
              Sıkça Sorulan Sorular
            </Text>
            <Text fw={600} size="md" mb={5}>
              Satış Sözleşmesi
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default OrderDetailsMap;
