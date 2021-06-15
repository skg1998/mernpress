import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        flexGrow: 1,
      },
      bottom: {
        color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      },
      top: {
        color: '#1a90ff',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
      },
      circle: {
        strokeLinecap: 'round',
      },
      container:{
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height:" 100%",
        zIndex: "1000",
        background:"rgba(255, 255, 255, 0.4)"
      }
    }
));

const Spinner = ({ text, ...props }) => {
    const classes = useStyles();
    return (
      <div
        {...props}
        className={classes.container}
      >
        {text ? <h1>{`${text}...`}</h1>  : 
        <div className={classes.root}>
            <CircularProgress
            variant="determinate"
            className={classes.bottom}
            size={40}
            thickness={4}
            {...props}
            value={100}
            />
            <CircularProgress
            variant="indeterminate"
            disableShrink
            className={classes.top}
            classes={{
                circle: classes.circle,
            }}
            size={40}
            thickness={4}
            {...props}
            />
        </div>
        }
      </div>
    );
  };
  
  export default Spinner;