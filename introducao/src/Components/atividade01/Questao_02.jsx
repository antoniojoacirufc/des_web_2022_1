import React from "react";
import { Component } from "react/cjs/react.development";

/*class Questao_02 extends Component {
  render() {
    return (
      <div>
        <h1>Questao 02</h1>
        <h2>Nome: Antonio Joacir</h2>
        <h2>Curso: Redes de Computadores</h2>
        <h2>Cidade: Capistrano</h2>
        <h2>UFC</h2>
      </div>
    );
  }
}*/

class Questao_02 extends Component {
  render() {
      const {nome, curso, cidade, univ} = this.props
    return <div>
        <h1>Questao 04</h1>
        <h2>Nome: {nome}</h2>
        <h2>Curso: {curso}</h2>
        <h2>Cidade: {cidade}</h2>
        <h2>Universidade: {univ}</h2>
    </div>;
  }
}

export default Questao_02
