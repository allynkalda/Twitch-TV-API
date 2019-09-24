import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    navbar: {
      background: 'pink',
    },
  });

export default function Navbar() {

    const classes = useStyles();

    return (
        <Grid container className={classes.navbar} direction="row" justify="center" alignItems="center">
        <Grid item xs={3}>Sort by: </Grid>
        <Grid item xs={3}><Button color="primary">Popularity</Button></Grid>
        </Grid>
    )
}
