import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      flexGrow: '1',
    },
    appbar: {
      alignItems: 'center'
    },
    button: {
      padding: '0px 20px 0px 20px'
    }
  });

const Navbar = ({renderBar, renderMain}) => {

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <AppBar className={classes.appbar} position="fixed">
          <Toolbar>
              <Button className={classes.button} onClick={() => renderMain()} color="inherit">Grid View</Button>
              <Button className={classes.button} onClick={() => renderBar()} color="inherit">List View</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Navbar;