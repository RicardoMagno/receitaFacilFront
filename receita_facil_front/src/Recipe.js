import React, { Component } from 'react';
import Ingredients from './Ingredients';


import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class Recipe extends Component{
    state = {
      dense: false,
      secondary: false,
    };
      render() {
        //const { classes } = this.props;
        const { dense, secondary } = this.state;
          return (
            <div className="root">
                  <Tittle tittle={this.props.recipe.tittle} />
                  <Owner owner={this.props.recipe.owner} />
                  {this.props.recipe.description}
                <Ingredients ingredients={this.props.recipe.ingredientes}/>
                <Modo modo={this.props.recipe.modo} />
            </div>
          );
      }
  }
  const Tittle = props => <h1>{props.tittle}</h1>;
  const Modo = props =>(
    <Paper className="{classes.root}" elevation={1}>
        <Typography variant="h5" component="h3">
            Modo de Preparo
        </Typography>
            {props.modo.map((ingr) => 
                <Typography component="p" key={ingr.toString()}>
                    {ingr}
                </Typography>
            )}
    </Paper>);
  const Owner = props => <h1>{props.owner}</h1>;
  
  export default Recipe;