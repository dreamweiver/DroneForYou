import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import drone from './drone.png';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
    flexGrow: 1,
    height:'100%',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  fullHeight:{
    height:'100%'
  },
  normal: {
    backgroundColor: green[600],
  },
  highlight: {
    backgroundColor: theme.palette.error.dark,
  },
}));


function Drone(props) {
  const { maxFlightTime, charge, title, onDroneAction, isDroneNotAcessible} = props;
  const classes = useStyles();

  // call the respective parent handler for renting a drone
  function rentADrone() {
    onDroneAction();
  }

  // mark the drones with battery charge < 10 as In-Accessible drone
  function isLowCharge() {
    let batteryCharge = !!charge ? charge.split('%')[0] : 0;

    return batteryCharge < 11;
  }

  // define battery charge chip with respective color, based on the level of charge
  function getChipColor() {
    return isLowCharge() ? classes.highlight : classes.normal;
  }

  return (
    <div className={classes.root} >
        <Grid container spacing={2} className={classes.fullHeight}>
          <Grid item className={classes.fullHeight}>
            <Avatar alt="drone" src={drone} />
          </Grid>
          <Grid item xs={12} sm container className={classes.fullHeight}>
            <Grid item xs={10} container direction="column" spacing={2} >
              <Grid item xs >
                <Typography gutterBottom variant="caption">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Max Flight Time: {maxFlightTime}
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button color="primary" variant="contained"
                        onClick={rentADrone} disabled={isDroneNotAcessible || isLowCharge()}>
                        RENT ME
                      </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="caption">
                <Chip  size="small" label={charge} className={getChipColor()} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
    </div>
  );
}

export default Drone