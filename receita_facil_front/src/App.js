import React, { Component } from 'react';
import logo from './static/images/rlogo.png';
import './App.css';
import Recipe from './Recipe';
import GridRecipes from './GridRecipes';
import TitlebarGridList from './TitlebarGridList';
import AutoGrid from './AutoGrid';
import AdvancedGridList from './AdvancedGridList';
import tileData from './tileData';
import { BrowserRouter as Router, Route, HashRouter, Link } from "react-router-dom";
import NavSearchbar from './NavSearchbar';
import Login from './Login';

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
        <NavSearchbar barName="Navbar"/>
        <header className="App-header">
                <img src={logo} className="Receita-logo" alt="logo" />
        </header>
        <body className="App-body">
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/grid">Grid</Link></li>
                <li><Link to="/recipe">Receita</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route path="/grid" component={GridRecipes} />
               <Route
                path='/recipe'
                render={(props) => (<Recipe recipe={this.state.recipe}/>)}
              />
            </div>
          </Router>
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

export default App;