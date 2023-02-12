import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import OffersWraper from "./components/offersWraper";
import { BrowserRouter } from "react-router-dom";
import Packages from "./components/packages";
import { Coments, Coment } from "./components/coments";
import { ThreeCards, Card } from "./components/threeCards";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero
          style={styleHero}
          title1={title1}
          title2={title2}
          description={descriptionHero}
        />
        <TrickOrThreat
          style={styleTrick}
          description={descriptionTrickOrThreat}
          img={imgTrickOrThreat}
        />
        <OffersWraper style={styleWraper} />

        <Coments />
        <ThreeCards />
      </BrowserRouter>
    </div>
  );
}

export default App;
