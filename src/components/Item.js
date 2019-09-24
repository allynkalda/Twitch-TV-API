import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    grid: {
      padding: '10px',
    },
    image: {
      borderRadius: '10px',
    }
  });

export default function Item(prop) {

    const { data } = prop;
    const classes = useStyles();
    const items = data.streams.map((data) => {
        return (
        <Grid className={classes.grid} id={data._id} item xl={4} lg={4} md={4} sm={6} xs={12}>
            <img className={classes.image} src={data.preview.medium} />
            <p>{data.channel.display_name} : {data.channel.game ? data.channel.game : "no game"}</p>
            <p>{data.viewers} viewers</p>
        </Grid>
        )
    })

    return (
        <div>
        <Grid container direction="row" justify="center" alignItems="center">
        { data && data.streams ? items : null }
        </Grid>
        </div>
    )
}

