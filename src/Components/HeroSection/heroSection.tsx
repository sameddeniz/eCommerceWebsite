import React from "react";
import classes from "./heroSection.module.css";

const heroSection = () => {
  return (
    <img
      className={classes.heroSection}
      src="/src/assets/HomePageHero.jpeg"
    ></img>
  );
};

export default heroSection;
