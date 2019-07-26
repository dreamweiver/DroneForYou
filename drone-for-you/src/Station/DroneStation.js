import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Drone from './Drone';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  fullHeight:{
    height: '100%'
  },
  placeHolder:{
    backgroundColor : grey[200]
  },
  text:{
    textAlign: 'center',
    paddingTop: '30%'
  }

}));


function DroneStation(props) {
   const { stationId, drones, onDroneRenting, disableDroneRenting } = props;
   const dronesPerRow = 5;
   const classes = useStyles();

   // Split the drones into 2 rows for displaying 
   const firstRowDrones = !!drones ? drones.slice(0, dronesPerRow) : [];
   const secondRowDrones = !!drones ? drones.slice(dronesPerRow): [];

   // fills the empty positions of the station
   function filler(count) {
    let slots = [];
    count = dronesPerRow - count;

      for(let i =0; i< count; i++){
        slots.push(
            <Grid key={i} item xs >
              <Paper className={clsx(classes.fullHeight,classes.placeHolder)} >
                <Typography variant = "h6" color="textSecondary" className={classes.text}>
                  Empty Slot
                </Typography>
              </Paper>
            </Grid>
          )
      }

      return slots;
   }

  return (
     <Paper className="dashboard__sta">
      <div className="dashboard__sta-row1">
        <AppBar position="static">
          <Toolbar>
            <Typography noWrap>
              <b>STATION {stationId}</b>
            </Typography>
            <div className={classes.grow} />
            <Typography noWrap>
              Drones Count : {drones.length} / {dronesPerRow * 2}
            </Typography >
          </Toolbar>
        </AppBar>
      </div>
      <div className="dashboard__sta-row margin10">
        <Grid className="height100P" container spacing={3}>
          {
            firstRowDrones.map((drone, index) => {
              return (<Grid key={index} className="height100P" item xs>
                <Paper className="height100P">
                  <Drone title={drone.manufacturer + drone.model} 
                      charge={drone.charge} 
                      maxFlightTime={drone.maxFlightTime}
                      onDroneAction={()=>onDroneRenting(drone, stationId)}
                      isDroneNotAcessible={disableDroneRenting}></Drone>
                </Paper>
              </Grid>);
            })
          }
           
          {filler(firstRowDrones.length)}
        </Grid>
      </div>
      <div className="dashboard__sta-row margin10">
        <Grid className="height100P" container spacing={3}>
          {
            secondRowDrones.map((drone, index) => {
              return (<Grid key={index} className="height100P" item xs>
                <Paper className="height100P">
                  <Drone title={drone.manufacturer + drone.model}
                    charge={drone.charge}
                    maxFlightTime={drone.maxFlightTime}
                    onDroneAction={()=>onDroneRenting(drone, stationId)}
                    isDroneNotAcessible={disableDroneRenting}></Drone>
                </Paper>
              </Grid>);
            })
          }
          { filler(secondRowDrones.length)}
        </Grid>
      </div>
    </Paper>
  );
}

export default DroneStation