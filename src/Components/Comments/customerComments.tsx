import React from "react";
import classes from "./customerComments.module.css";
import { Container, SimpleGrid, Text } from "@mantine/core";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaStar } from "react-icons/fa";

const customerComments = () => {
  return (
    <>
      <Container size="lg">
        <div className={classes.realCustComm}>
          <h4>GERÇEK MÜŞTERİ YORUMLARI</h4>
          <h4>
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
            <u>198453 Yorum</u>&nbsp;
            <GrPrevious />
            <GrNext />
          </h4>
        </div>
        <hr />
        <SimpleGrid cols={4}>
          <div>
            <Text mt="xs" c="dimmed" size="sm">
              19/07/2024
            </Text>
            <Text fw={500} size="lg" mt="sm">
              Beğendim gayet güzeldi
            </Text>
            <Text mt="xs" c="dimmed" size="sm">
              Ürün gayet güzel, farklı aromalarını da deneyeceğim
            </Text>
          </div>
          <div>
            <Text mt="xs" c="dimmed" size="sm">
              19/07/2024
            </Text>
            <Text fw={500} size="lg" mt="sm">
              Beğendim gayet güzeldi
            </Text>
            <Text mt="xs" c="dimmed" size="sm">
              Ürün gayet güzel, farklı aromalarını da deneyeceğim
            </Text>
          </div>
          <div>
            <Text mt="xs" c="dimmed" size="sm">
              19/07/2024
            </Text>
            <Text fw={500} size="lg" mt="sm">
              Beğendim gayet güzeldi
            </Text>
            <Text mt="xs" c="dimmed" size="sm">
              Ürün gayet güzel, farklı aromalarını da deneyeceğim
            </Text>
          </div>
          <div>
            <Text mt="xs" c="dimmed" size="sm">
              19/07/2024
            </Text>
            <Text fw={500} size="lg" mt="sm">
              Beğendim gayet güzeldi
            </Text>
            <Text mt="xs" c="dimmed" size="sm">
              Ürün gayet güzel, farklı aromalarını da deneyeceğim
            </Text>
          </div>
        </SimpleGrid>
      </Container>
      ;
    </>
  );
};

export default customerComments;
