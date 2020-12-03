import React, { Component } from "react";
import ListaDeNotas from "./conponents/ListaDeNotas";
import FormularioCadastro from "./conponents/FormularioCadastro";
import "./conponents/assets/App.css";
import "./conponents/assets/index.css";
class App extends Component {
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}
export default App;
