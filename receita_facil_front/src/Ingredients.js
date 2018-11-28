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
    primary: '#fffff0',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fffff0',
      main: '#fffff1',
      dark: '#ffeeee',
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

class Ingredients extends Component{
    state = {
        dense: false,
        secondary: false,
        recipe: {tittle: "Bolo de Cenoura", description: "Bolo de  cenoura muito simples e saboroso",modo:["Cortar a cenoura","Bater no liquidificardor","Adicionar os outros ingredientes e bater novamente"], ingredientes: ["cenoura","oleo","acucar"], owner: "Usuario 15463268", date: "24-10-2018"}

      };
        render() {
            const { classes, theme } = this.props;
            const { dense, secondary } = this.state;
            return( 
                <div classeName={classes.root}>
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
                                <ListItem dense={this.props.dense}>
                                        <ListItemText key={ingr.toString()}
                                         primary={
                                            <Typography variant="h6" color="primary" align="center">
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
    theme: PropTypes.object.isRequired,    
};
  
export default withStyles(styles, { withTheme: true })(Ingredients);


