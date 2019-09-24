import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
import Loader from 'react-loader-spinner';
import { makeStyles } from '@material-ui/styles';
import Item from './Item'

const useStyles = makeStyles({
    div: {
      padding: '80px',
    },
  });

export default function Main(props) {
    const { loading, data } = props;
    const classes = useStyles();

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
                <Item data={data}></Item>
            ) }
        </div>
    )
}

