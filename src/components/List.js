import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from 'react-loader-spinner';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/styles';
import Bar from './Bar'

const useStyles = makeStyles({
    loader: {
      padding: '80px',
      textAlign: 'center'
    },
    card: {
      width: '100vw',
      padding: '10px 0px 10px 0px'
    },
    container: {
      padding: '8px',
    },
    item: {
      padding: '0px 8px 0px 8px'
    },
    text: {
      textAlign: 'center',
      fontWeight: 'bold'
    },
    rank: {
      margin: '10',
      color: '#fff',
      backgroundColor: 'red'
    },
    container : {
      textAlign: 'center'
    }
  });


const List = ({data, loading}) => {

    const highestViewers = data.streams[0].viewers;
    const classes = useStyles();
    const items = data.streams.map((data, index) => {
        return (
          <div className={classes.container}>
          <Card className={classes.card}>
            <CardActionArea>
            <Grid container onClick={() => window.open(data.channel.url)} className={classes.container} key={data._id} direction="row" justify="center" alignItems="center">
              <Grid item className={classes.item} lg={1} md={1} sm={1} xs={3}>
                <Avatar className={classes.rank} >
                  {index + 1}
                </Avatar>
              </Grid>
              <Grid item className={classes.item} lg={4} md={4} sm={4} xs={6}><Bar viewers={data.viewers} max={highestViewers}></Bar></Grid>
              <Grid item className={classes.item} lg={1} md={1} sm={1} xs={3}>
                <Avatar src={data.channel.logo}>
                </Avatar>
              </Grid>
              <Grid item className={classes.item} lg={2} md={2} sm={2} xs={4}><p>{data.channel.display_name}</p></Grid>
              <Grid item className={classes.item} lg={2} md={2} sm={2} xs={4}><p>{data.channel.game ? data.channel.game : "no game"}</p></Grid>
              <Grid item className={classes.item} lg={2} md={2} sm={2} xs={4}><p>{data.viewers.toLocaleString()} viewers</p></Grid>
          </Grid>
          </CardActionArea>
        </Card>
        </div>
        )
    })

    return (
        <div>
            { loading ? 
            (
            <div className={classes.loader}>
             <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
             />
            </div>
            ) : (
        <Grid container direction="row">
          <Card className={classes.card}>
            <Grid container onClick={() => window.open(data.channel.url)} className={classes.container} key={data._id} direction="row" justify="center" alignItems="center">
              <Grid item className={classes.text} lg={1} md={1} sm={1} xs={3}>
                <p>Ranking</p>
              </Grid>
              <Grid item className={classes.text} lg={4} md={4} sm={4} xs={6}>
                <p>Viewers Bar</p>
              </Grid>
              <Grid item className={classes.text} lg={1} md={1} sm={1} xs={3}>
                <p>Logo</p>
              </Grid>
              <Grid item className={classes.text} lg={2} md={2} sm={2} xs={4}>
                <p>Streamer Name</p></Grid>
              <Grid item className={classes.text} lg={2} md={2} sm={2} xs={4}>
                <p>Game</p></Grid>
              <Grid item className={classes.text} lg={2} md={2} sm={2} xs={4}>
                <p>Number of viewers</p></Grid>
            </Grid>
          </Card>
            {data && data.streams ? items : null}
        </Grid>
            ) }
        </div>

    )
}

export default List;