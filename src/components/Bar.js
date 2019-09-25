import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from 'react-loader-spinner';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    div: {
      padding: '80px',
    },
  });


const Bar = ({data, loading}) => {

    const items = data.streams.map((data) => {
        return (
        <Grid item className={classes.grid} id={data._id} xs={12}>
              <Avatar src={data.channel.logo}>
              </Avatar>
            <p>{data.channel.display_name}</p>
            <p>{data.channel.game ? data.channel.game : "no game"}</p>
          />
           <img src={data.preview.medium} />
              <p>{data.viewers} viewers</p>
        </Grid>
        )
    })

    return (
        <div>
            { loading ? 
            (
            <div className={classes.div}>
             <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
             />
            </div>
            ) : (
                <Grid container>
                    {data && data.streams ? items : null}
                </Grid>
            ) }
        </div>

    )
}

export default Bar;