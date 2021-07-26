import React from "react";
import "./App.css";
import { Footer } from "./component/footer/footer";
import { Header } from "./component/header/header";
import { Main } from "./container/main/main";

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col p-3 lg:p-5">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
