import React from "react";
import classes from "./AdvSecondText.module.css";
import { Container, SimpleGrid, Text } from "@mantine/core";
import { FaStar } from "react-icons/fa";

const AdvSecondText = () => {
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#222222" }}>
        <Container size="lg">
          <Text mt="xs" pt="xl" c="white">
            <FaStar color="yellow" />
            &nbsp;
            <FaStar color="yellow" />
            &nbsp;
            <FaStar color="yellow" />
            &nbsp;
            <FaStar color="yellow" />
            &nbsp;
            <FaStar color="yellow" />
            &nbsp; &nbsp; 
            <span>(140000+)</span>
          </Text>
          <SimpleGrid cols={2} pb="md">
            <Text mt="xs" size="xl" c="white">
              LABORATUVAR TESTLİ ÜRÜNLER <br /> AYNI GÜN & ÜCRETSİZ KARGO <br />{" "}
              MEMNUNİYET GARANTİSİ
            </Text>
            <Text mt="xs" c="dimmed" size="lg">
              200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi
              seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsanız,
              bizimle iletişime geçtiğinizde çözüme kavuşturacağız.
            </Text>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};

export default AdvSecondText;
