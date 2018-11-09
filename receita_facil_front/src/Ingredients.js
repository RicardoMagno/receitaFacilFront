import React, { Component } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    primary: '#757ce8',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
});

class Ingredients extends React.Component{
    state = {
        dense: false,
        secondary: false,
        recipe: {tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"}

      };
        render() {
            const { classes } = this.props;
            const { dense, secondary } = this.state;
            return( 
                <div classeName="{classes.root}">
                        <Typography variant="h6" color="primary">
                        Ingredientes
                        </Typography>
                        <FormControlLabel
                        control={
                            <Checkbox
                            checked={secondary}
                            onChange={event => this.setState({ secondary: event.target.checked })}
                            value="secondary"
                            />
                        }
                        label="Detalhes dos ingredientes"
                        />
                    {/*TODO: Cada ingrediente deve redirecionar para a sua respectiva pagina
                    TODO: O texto secundario deve vir no objeto ingrediente */}
                        <div classeName={classes.demo}>   
                            <List dense={dense} component="ul">
                                {this.props.ingredients.map((ingr) => 
                                    <li key={ingr.toString()}> 
                                        {ingr} 
                                    </li>
                                )}
                                {this.props.ingredients.map((ingr) => 
                                <ListItem>
                                        <ListItemText key={ingr.toString()}
                                         primary={
                                            <Typography variant="h6" color="primary">
                                                {ingr}
                                            </Typography>}
                                            secondary={secondary ? 'Secondary text' : null} > 
                                        </ListItemText>
                                </ListItem>
                                )}
                            </List>
                        </div>  
                    </div>
            );
    }
}


Ingredients.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Ingredients);


