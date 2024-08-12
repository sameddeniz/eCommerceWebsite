import React from "react";
import { Container, Accordion } from "@mantine/core";
import classes from "./faqsAll.module.css";
import faquestions from "./faqDummyData.tsx";


const FaqsAll = () => {
  const items = faquestions.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Container size="lg" className={classes.wrapper}>
      <Accordion variant="separated" radius="lg" defaultValue="Apples">
        {items}
      </Accordion>
    </Container>
  );
};

export default FaqsAll;
