import React from "react";
import { Image, Container, SimpleGrid } from "@mantine/core";
import classes from "./Categories.module.css";

const Categories = () => {
  return (
    <>
      <div>
        <Container size="lg">
          <SimpleGrid cols={3}>
            <div className={classes.categories}>
              <a href="index.html">
                <Image radius="md" src="/src/assets/categories/protein.png" />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image
                  radius="md"
                  src="/src/assets/categories/protein.png"
                />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image radius="md" src="/src/assets/categories/saglik.png" />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image
                  radius="md"
                  src="/src/assets/categories/sporgidalari.png"
                />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image radius="md" src="/src/assets/categories/gida.png" />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image radius="md" src="/src/assets/categories/saglik.png" />
              </a>
            </div>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};

export default Categories;
