import React, { Component } from "react";
import FormularioCadastro from "./conponents/FormularioCadastro";
import ListaDeNotas from "./conponents/ListaDeNotas";

class App extends Component {
  render(){
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}
export default App;
