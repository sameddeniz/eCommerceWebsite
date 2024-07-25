import React from "react";
import { Container, SimpleGrid, Grid } from "@mantine/core";
import classes from "./Categories.module.css";

const Categories = () => {
  return (
    <>
      <div>
        <Container size="lg">
          <SimpleGrid cols={3}>
            <div className={classes.categories}>
              <a href="index.html">
                <img src="/src/assets/categories/protein.png"></img>
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <img src="/src/assets/categories/vitaminler.png"></img>
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <img src="/src/assets/categories/saglik.png"></img>
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <img src="/src/assets/categories/sporgidalari.png"></img>
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <img src="/src/assets/categories/gida.png"></img>
              </a>
            </div>
            <div className={classes.categories}>
              <a href="index.html">
                <img src="/src/assets/categories/aminoAsit.jpg"></img>
              </a>
            </div>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};

export default Categories;
