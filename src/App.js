import { React } from "react";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Packages } from "./components/packages";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/packages" element={<Packages />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
