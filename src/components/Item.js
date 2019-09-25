import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    grid: {
      padding: '10px 10px 10px 10px'
    },
    avatar: {
      backgroundColor: 'red',
    },
    image: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop:'30'
    }
  });

export default function Item(prop) {

    const { data } = prop;
    const classes = useStyles();
    const items = data.streams.map((data) => {
        return (
        <Grid item className={classes.grid} id={data._id} xl={4} lg={4} md={4} sm={6} xs={12}>
          <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar src={data.channel.logo}>
              </Avatar>
                }
            title={data.channel.display_name}
            subheader={data.channel.game ? data.channel.game : "no game"}
          />
          <CardMedia
            className={classes.image}
            image={data.preview.medium}
          />
            <CardContent>
              <p>{data.viewers} viewers</p>
            </CardContent>
          </Card>
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

