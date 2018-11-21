import React, { Component } from 'react';
import logo from './static/images/rlogo.png';
import './App.css';
import Recipe from './Recipe';
import GridRecipes from './GridRecipes';
import TitlebarGridList from './TitlebarGridList';
import tileData from './tileData';


class App extends Component {
  constructor() {
      super();
      this.state = {
          grid:[{tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"},
                    {tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"},
                    {tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"}],
          recipe: {tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"}
      };
  }

  render() {
    return (
      <div className="App">
        <Greeting greeting="Bem vindo ao Receita Facil" />
        <header className="App-header">
                <img src={logo} className="Receita-logo" alt="logo" />
        </header>
        <body className="App-body">
          <GridRecipes className="recipe" recipe={this.state.recipe}/>
          <Recipe className="recipe" recipe={this.state.recipe}/>
          <TitlebarGridList/>
        </body>
        <footer className="App-footer">
                <p>Footer</p>
          </footer> 
      </div>
    );
  }
}
const Greeting = props => <h1>{props.greeting}</h1>;


export default App;