import React, { Component } from "react";
import ListaDeNotas from "./conponents/ListaDeNotas";
import FormularioCadastro from "./conponents/FormularioCadastro";
import ListaDeCategorias from "./conponents/ListaDeCategorias";
import "./conponents/assets/App.css";
import "./conponents/assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />{" "}
        <main className="conteudo-principal">
          <ListaDeCategorias/>
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}
export default App;
