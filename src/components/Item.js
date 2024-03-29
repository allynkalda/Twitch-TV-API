import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/styles';
import { switchLanguage } from '../config/languages'

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
    },
    rank: {
        margin: '10',
        color: '#fff',
        backgroundColor: 'red'
      }
  });

export default function Item(prop) {

    const { data } = prop;
    const classes = useStyles();
    const language = () => {
        return switchLanguage(data.channel.language.toUpperCase().toString())
    }
    const items = data.streams.map((data, index) => {
        return (
        <Grid onClick={() => window.open(data.channel.url)} item className={classes.grid} key={data._id} xl={4} lg={4} md={4} sm={6} xs={12}>
          <Card>
          <CardActionArea>
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
              <Grid container direction="row" justify="space-between" alignItems="center">
              <Chip label={data.viewers.toLocaleString() + " viewers"} color="primary"></Chip>
              <Chip label={switchLanguage(data.channel.language.toUpperCase())} color="primary"></Chip>
              <Avatar className={classes.rank} >
                {index + 1}
              </Avatar>
              </Grid>
            </CardContent>
            </CardActionArea>
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

