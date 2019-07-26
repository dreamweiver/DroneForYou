import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import HeaderAppBar from './../Common/HeaderAppBar';
import DroneStation from  './../Station/DroneStation';
import DroneService from './../Services/DroneService';
import UtilityHelper from './../Helpers/UtilityHelper';
import AuthenticationService from  './../Services/AuthenticationService';
import UserService from  './../Services/UserService';
import NotificationBar from './../Common/Notification';
import './dashboard.scss';

const droneStationsCount = 3; // Number of Drone stations defined on app
const notificationDimissTime =  5000; // dismm time for all notifications

class Dashboard extends Component {

  _timer;
  _activeDrone;
  _currentUser = {
    firstName : '',
    lastName :'',
    isBanned: '',
    emailId :''
  };

  constructor(){
    super();
    
    this.state = {
      stations : {},
      droneTimer: 0,
       notification : {
        showNotification: false,
        variant: '',
        message: ''
      }
    }

    this.rentDrone = this.rentDrone.bind(this);
    this.returnDrone = this.returnDrone.bind(this);
    this.buildDroneStations = this.buildDroneStations.bind(this);
    this.dismissNotification = this.dismissNotification.bind(this);
  }

  componentDidMount() {
    // fetch all drones details after UI is loaded
    this._fetchDrones();
    this._currentUser = UserService.getUserData();
  }

  // destroy Countdown timer when component is removed from dom
  componentWillUnmount() {
    this._destroyTimer(this._timer);
  }

  isDroneActive = false; // flag to identify drones flying status


  // fetch the Drones list and equally distribute them 
  // among no of defined stations [3]
  _fetchDrones() {
    DroneService.getAllDrones().then(data => {
        let stations = {}
        let drones = data.quads;

        stations = UtilityHelper.divideDronesAcrossStations(drones, droneStationsCount);

        this.setState({...this.state, stations});
    }).catch(error => {
      let {notification} = this.state;

      notification.message = "Failed to Extract Drones";
      notification.variant = 'error';
      notification.showNotification = true;

      this.setState({...this.state, 'notification' : {...notification}});
    });
  }

  resetTimer() {
    // if no active drone, then clear/reset timer
    if(!this._activeDrone) {
      setTimeout(_=> {
        this.setState({...this.state, droneTimer: 0});
      }, 3000);
    }
  }

  // Handler for dismissing notifications
  dismissNotification(event) {
    let {notification} = this.state;

    notification.showNotification = false;

    this.setState({...this.state, 
       'notification': {...notification}});
  }

  // return the drone to nearest station
  // 1. After usage
  // 2. when crashed
  returnDrone(isDroneCrashed) {
    let rentedDrone = {...this._activeDrone};

    if(!!rentedDrone) {
      let {stations:newStations, notification} = this.state;

      // if drone is crashed, set battery charge to 0%
      if(!!isDroneCrashed) {
        rentedDrone.charge = "0%";
      }

      this.isDroneActive = false;
      this._destroyTimer(this._timer);

      let stationsIDs = Object.keys(newStations);

      // return the active drone to the nearest station which has empty slot
      for(let id of stationsIDs) {
        if(newStations[id].length < 10) {
          newStations[id] = [...newStations[id], rentedDrone];
          break;
        }
      }

      this._activeDrone = ''; // clear active drone traces from dashboard  

      notification.message = "Drone Retuned to nearest Station";
      notification.variant = 'success';
      notification.showNotification = true;   

      this.resetTimer(); // Stop or Cancel Countdown timer

      this.setState({...this.state,
         stations: newStations,
         'notification':{...notification}});
    }
  }

  // destroy count down timer 
  _destroyTimer(timer) {
    if(timer) {
      clearInterval(timer);
    }
  }

  // Start the Count down timer based on max flight time
  _startCountDown(uniqueId, minutes) {
    let seconds = minutes * 60;
    let timeRem = 0;
    let {notification} = this.state;
  
    this._timer = setInterval(_=> {
      seconds = seconds - 1;
      timeRem = UtilityHelper.convertSecondsToHHMMSS(seconds);

      // Drone has Crashed.
      // User will be Banned from renting drone in future
      if(seconds === 0) {
        this.isDroneActive = false;
        this._destroyTimer(this._timer);
        AuthenticationService.banUser(uniqueId);

        notification.message = "Drone Has Crashed!!!";
        notification.variant = 'error';
        notification.showNotification = true;

        this.setState({...this.state,
          'notification': {...notification}});

        // Automatically return the drone to nearest station and 
        // ban the user from system
        this.returnDrone(true);

        return;
      }

      this.setState({...this.state,
        'droneTimer': timeRem});
      
    }, 1000); // update the time every second
  }

  //TODO: logout functionality 
  
  // logout user from applciation
  // clear session after logging out
  // logout() {
  //   AuthenticationService.logoutUser().then(status => {
  //     this.setState({...this.state, redirectTo: true, redirectPath: {pathName:'/home'}});
  //   }).catch(error => {
  //     // handle errors if logout fails
  //   });
  // }

  // Rent a drone, show timer and remove the rented drone from its station
  rentDrone(droneDetails, stationId) {

    let {maxFlightTime : flightTime, charge: batteryCharge} = droneDetails;
    let uniqueId = this._currentUser.emailId;
    let {stations : allStations, notification} = {...this.state};

    this._activeDrone = droneDetails;
    flightTime = flightTime.split('min')[0];
    batteryCharge = batteryCharge.split('%')[0];

    if(flightTime) {
      flightTime = parseInt(flightTime, 10);
      batteryCharge = !!batteryCharge ? parseInt(batteryCharge, 10) : 0;

      // Calculate rental time based on battery Charge and max flight time
      let droneRentalTime = (batteryCharge / 100) * flightTime;

      this._startCountDown(uniqueId, droneRentalTime); // start the Count Down Timer
      this.isDroneActive = true; //flag to prevent multiple drone renting
        
      // remove the drone from respective station
      let newStations = UtilityHelper.removeDroneFromStation(allStations, stationId, droneDetails);

      notification.message = `You have Rented out a Drone "  ${droneDetails.manufacturer}  ${droneDetails.model} "`;
      notification.variant = 'success';
      notification.showNotification = true;

      this.setState({...this.state, stations: newStations, 'notification' : {...notification}});
    }
  }

  // Build DroneStations with drones
  buildDroneStations () {
    let droneStations = [];
    let {stations} = this.state;
    let uniqueId = this._currentUser && this._currentUser.emailId;
    let isUserForbidden = AuthenticationService.isUserBanned(uniqueId)
                          || this.isDroneActive ;

    for(let i=0 ; i< Object.keys(stations).length; i++) {
      droneStations.push(
            <Grid key={i} item xs={12} sm={12}>
               <DroneStation stationId={i} drones={stations[i]} 
                onDroneRenting={this.rentDrone} 
                disableDroneRenting={isUserForbidden}></DroneStation>
            </Grid>
          );
    }

    return droneStations;
  }
  
  render() {

    let {droneTimer : timerValue,
          notification 
        } = this.state;
    let {lastName, firstName, emailId} = this._currentUser;
    let isBanned = AuthenticationService.isUserBanned(emailId);


    return (
      <div className="dashboard">
        <HeaderAppBar countDownValue={timerValue} 
          onDroneReturn={this.returnDrone}
          loggedInUser = {lastName +', '+ firstName}
          isUserBanned= {isBanned}>
        </HeaderAppBar>
        <section className="dashboard__cont">
          <Container maxWidth="lg">
            <Grid justify="center" container spacing={3} >
              {this.buildDroneStations()}
            </Grid>
          </Container>
        </section>
         <NotificationBar variant={notification.variant}
           msg={notification.message} 
           showNotification={notification.showNotification}
           dismissAfter={notificationDimissTime} 
           onDimiss={this.dismissNotification}>
        </NotificationBar>
      </div>
    );
  }
}

export default Dashboard;