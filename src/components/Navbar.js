import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    navbar: {
      background: 'pink',
    },
  });

const Navbar = ({renderBar}) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.navbar} direction="row" justify="center" alignItems="center">
        <Grid item xs={3}><Button color="primary">Popularity</Button></Grid>
        <Grid item xs={3}><Button onClick={() => renderBar()} color="primary">List</Button></Grid>
        </Grid>
    )
}

export default Navbar;