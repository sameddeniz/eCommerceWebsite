import React from "react";
import { Image, Container, SimpleGrid } from "@mantine/core";
import classes from "./Categories.module.css";

const Categories = () => {
  return (
    <>
      <div>
        <Container size="lg">
          <SimpleGrid cols={3} mt="md">
            <div className={classes.categories} >
              <a href="/protein">
                <Image radius="md" src="/src/assets/categories/protein2.png" />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image
                  radius="md"
                  src="/src/assets/categories/vitaminler2.png"
                />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image radius="md" src="/src/assets/categories/saglik2.png" />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image
                  radius="md"
                  src="/src/assets/categories/sporgidalari2.png"
                />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image radius="md" src="/src/assets/categories/gida2.png" />
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <Image radius="md" src="/src/assets/categories/tumurunler.png" />
              </a>
            </div>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};

export default Categories;
