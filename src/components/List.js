import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from 'react-loader-spinner';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';
import Bar from './Bar'

const useStyles = makeStyles({
    loader: {
      padding: '80px',
      textAlign: 'center'
    },
    container: {
      padding: '8px',
      borderBottomColor: '#efefef',    
      borderBottomWidth: '0.5px',
      borderBottomStyle: 'solid'
    },
    item: {
      padding: '0px 8px 0px 8px'
    },
    rank: {
      margin: '10',
      color: '#fff',
      backgroundColor: 'red'
    }
  });


const List = ({data, loading}) => {

    const highestViewers = data.streams[0].viewers;
    const classes = useStyles();
    const items = data.streams.map((data, index) => {
        return (
            <Grid container className={classes.container} key={data._id} direction="row" justify="center" alignItems="center">
              <Grid item className={classes.item} xs={1}>
                <Avatar className={classes.rank} >
                  {index + 1}
                </Avatar>
              </Grid>
              <Grid item className={classes.item} xs={4}><Bar viewers={data.viewers} max={highestViewers}></Bar></Grid>
              <Grid item className={classes.item} xs={1}>
                <Avatar src={data.channel.logo}>
                </Avatar>
              </Grid>
              <Grid item className={classes.item} xs={2}><p>{data.channel.display_name}</p></Grid>
              <Grid item className={classes.item} xs={2}><p>{data.channel.game ? data.channel.game : "no game"}</p></Grid>
              <Grid item className={classes.item} xs={2}><p>{data.viewers.toLocaleString()} viewers</p></Grid>
          </Grid>
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
                    {data && data.streams ? items : null}
                </Grid>
            ) }
        </div>

    )
}

export default List;