import React from "react";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Buttona } from "../componentsindex";
import Videosorce from "../../img/index";
import BackgroundVideo from "./background";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
        <BackgroundVideo  className={Style.videobg} />
      <div className={Style.content}>
          <h1>Discover, collect, and sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Buttona btnName1="Start your search" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
