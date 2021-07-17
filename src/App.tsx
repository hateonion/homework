import React, { useState } from "react";
import "./App.css";
import { Footer } from "./component/footer/footer";
import { Header } from "./component/header/header";
import { Main } from "./component/main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
