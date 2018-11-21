import React, { Component } from 'react';

import Grid from './CSSGrid';
import Card from './MediaCard';

class GridRecipes extends Component{
    state = {
    };
      render() {
        //const { classes } = this.props;
        const { dense, secondary } = this.state;
          return (
            <div className="root">
                  <Grid grid={this.props.recipe.tittle} />
            </div>
          );
      }
  }
  
export default GridRecipes;