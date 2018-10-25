import React, { Component } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Ingredients extends React.Component{
    state = {
        dense: false,
        secondary: false,
      };
        render() {
          const { dense, secondary } = this.state;
            return(
                <Grid container spacing={16}>
                    <Grid item xs={12} md={6}>
                          <Typography variant="h6" className="{classes.title}">
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
                    {/* TODO: Criar a lista de ingredientes por interação
                    TODO: Cada ingrediente deve redirecionar para a sua respectiva pagina
                    TODO: O texto secundario deve vir no objeto ingrediente */}
                    <div className="{classes.demo}">
                        <List dense={dense}>
                            <ListItem>
                            <ListItemText
                                primary={this.props.ingredients[0]}
                                secondary={secondary ? 'Secondary text' : null}
                            />
                            </ListItem>
                            <ListItem>
                            <ListItemText
                                primary={this.props.ingredients[1]}
                                secondary={secondary ? 'Secondary text' : null}
                            />
                            </ListItem>
                            <ListItem>
                            <ListItemText
                                primary={this.props.ingredients[2]}
                                secondary={secondary ? 'Secondary text' : null}
                            />
                            </ListItem>
                        </List>
                    </div>
                    </Grid>
                </Grid>
            );
    }
}
export default Ingredients;