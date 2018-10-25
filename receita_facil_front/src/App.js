import React, { Component } from 'react';
import logo from './rlogo.png';
import './App.css';
import Recipe from './Recipe';

import { withStyles } from '@material-ui/core/styles';

class App extends Component {
  constructor() {
      super();
      this.state = {
          recipe: {tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"}
      };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
                <img src={logo} className="Receita-logo" alt="logo" />
          <Recipe className="recipe" recipe={this.state.recipe}/>
        </header>
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

export default withStyles(styles)(App);