import { Container, Tabs } from "@mantine/core";
import React from "react";
import FaqsAll from "./faqsAll";

const FaqSection = () => {
  return (
    <>
      <Container size="lg" mt="xl">
        <Tabs
          color="rgba(0, 0, 0, 1)"
          variant="pills"
          radius="xs"
          defaultValue="gallery"
        >
          <Tabs.List>
            <Tabs.Tab value="gallery">GENEL</Tabs.Tab>
            <Tabs.Tab value="messages">ÜRÜNLER</Tabs.Tab>
            <Tabs.Tab value="settings">KARGO</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="gallery">
            <FaqsAll />
          </Tabs.Panel>

          <Tabs.Panel value="messages">
            <FaqsAll />
          </Tabs.Panel>

          <Tabs.Panel value="settings">
            <FaqsAll />
          </Tabs.Panel>
        </Tabs>
      </Container>
      ;
    </>
  );
};

export default FaqSection;
