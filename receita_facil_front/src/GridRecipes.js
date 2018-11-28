import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 4}px 1`,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
});


class GridRecipes extends Component{
  
    state = {
      dense: false,
    };
      render() {
        //const { classes } = this.props;
        const { classes, theme } = this.props;
        const {dense} = this.state;
          return (
            <div>
                <Typography variant="h2" gutterBottom>
                  Receitas de Bolos
                </Typography>
                <Grid classeName={classes.container} spacing={120}>
                  <Grid item xs={4}>
                    <MediaCard  title="card 1" />
                  </Grid>
                  <Grid item xs={4}>
                  <MediaCard title="card 2">ADA</MediaCard>
                  </Grid>
                  <Grid item xs={4}>
                    <MediaCard title="card 3" />
                  </Grid>
                  <Grid item xs={4}>
                    <MediaCard title="card 4"/>
                  </Grid>
                  <Grid item xs={4}>
                    <MediaCard title="card 5"/>
                  </Grid>
                  <Grid item xs={4}>
                    <MediaCard title="card 6"/>
                  </Grid>
                </Grid>
              </div>
          );
      }
  }
  GridRecipes.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true })(GridRecipes);
