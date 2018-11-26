import React, { Component } from 'react';
import logo from './static/images/rlogo.png';
import './App.css';
import Recipe from './Recipe';
import GridRecipes from './GridRecipes';
import TitlebarGridList from './TitlebarGridList';
import AutoGrid from './AutoGrid';
import AdvancedGridList from './AdvancedGridList';
import tileData from './tileData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/grid" component={Grid} />
              <Route path="/recipe" component={rRecipe} />
            </div>
          </Router>
          <GridRecipes className="recipe" recipe={this.state.recipe}/>
          <Recipe className="recipe" recipe={this.state.recipe}/>
        </body>
        <footer className="App-footer">
                <p>Footer</p>
          </footer> 
      </div>
    );
  }
}
const Greeting = props => <h1>{props.greeting}</h1>;

const Home = () => <h2>Home</h2>;
const Grid = () => <GridRecipes/>;
const rRecipe = () => <Recipe/>;

export default App;