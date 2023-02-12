import { React, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Offers from "./components/offers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Packages } from "./components/packages";
import { Coments } from "./components/coments";
import { ThreeCards } from "./components/threeCards";
import {
  styleHero,
  title1,
  title2,
  descriptionHero,
  styleTrick,
  descriptionTrickOrThreat,
  imgTrickOrThreat,
  styleWraper,
} from "../src/copy/index";
import TrickOrThreat from "./components/trickOrThreat";
import AlarminglyText from "./components/alarminglyText";
import Holydays from "./components/holydays";
import Form from "./components/form";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
        <Routes>
          <Route path="/packages" element={<Packages />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
