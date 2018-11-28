import React, { Component } from 'react';
import logo from './static/images/rlogo.png';
import './App.css';
import Recipe from './Recipe';
import GridRecipes from './GridRecipes';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavSearchbar from './NavSearchbar';
import Login from './Login';
import axios from 'axios';

class App extends Component {
  constructor() {
      super();
      this.state = {
          grid:[{tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"},
                    {tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"},
                    {tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"}],
          recipe: {tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"},
          greeting: {tittle:"Bem vindo ao Receita Facil"}
      };
  }
  componentDidMount() {
    axios.get('http://localhost:3001/')
    .then(res => {
        this.setState({ greeting: res.data });
    });
  }
  render() {
    return (

      <div className="App">
        <Greeting greeting={this.state.greeting.tittle} />
        <NavSearchbar barName="Navbar"/>
        <header className="App-header">
                <img src={logo} className="Receita-logo" alt="logo" />
        </header>
        <body className="App-body">
          <Router>
            <div>
              <ul>
                <li className="App-link" ><Link to="/">Home</Link></li>
                <li className="App-link"><Link to="/grid">Grid</Link></li>
                <li className="App-link"><Link to="/recipe">Receita</Link></li>
                <li className="App-link"><Link to="/login">Login</Link></li>
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