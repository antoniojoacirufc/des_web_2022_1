import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";

// meus exports
import Questao_01 from "./Components/atividade01/Questao_01";
import Questao_02 from "./Components/Questao_02";
import Questao_03 from "./Components/Questao_03";
import Questao_04 from "./Components/Questao_04";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Questao_01 />
        <Questao_02 />
        <Questao_03 name="Antonio Joacir" curso="Redes" cidade="Capistrano" uni="UFC"/>
        <Questao_04 />*/}
      </div>
    );
  }
}

export default App;
