import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
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

function CSSGrid(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Receitas de Bolos
      </Typography>
      <Grid container spacing={50}>
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

CSSGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CSSGrid);