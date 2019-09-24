import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    navbar: {
      background: 'pink',
    },
  });

export default function Navbar() {

    const classes = useStyles();

    return (
            <Grid className={classes.navbar}>
                Navbar 
            </Grid>
    )
}
