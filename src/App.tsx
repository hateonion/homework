import React from "react";
import "./App.css";
import { Footer } from "./component/footer/footer";
import { Header } from "./component/header/header";
import { Main } from "./component/main";

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-c">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
