import { React, useState } from "react";
import Hero from "./hero";
import Offers from "./offers";
import { Coments } from "./coments";
import { ThreeCards } from "./threeCards";
import {
  styleHero,
  title1,
  title2,
  descriptionHero,
  styleTrick,
  descriptionTrickOrThreat,
  imgTrickOrThreat,
  styleWraper,
} from "../copy/index";
import TrickOrThreat from "./trickOrThreat";
import AlarminglyText from "./alarminglyText";
import Holydays from "./holydays";
import Form from "./form";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Hero
        style={styleHero}
        title1={title1}
        title2={title2}
        description={descriptionHero}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        openPopup={openPopup}
      />
      <AlarminglyText openPopup={openPopup} />
      <TrickOrThreat
        style={styleTrick}
        description={descriptionTrickOrThreat}
        img={imgTrickOrThreat}
      />
      <Holydays />
      <Offers style={styleWraper} />

      <Coments />
      <ThreeCards />
      <Form />
    </div>
  );
};

export default Home;
