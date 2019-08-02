import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthenticationService from './../Services/AuthenticationService';
import NotificationBar from './../Common/Notification';
import UserDataService from './../Services/UserService';

import './register-form.scss';

const notificationDimissTime =  5000; // time limit for dismissing notifications on this view

class RegisterForm extends Component {

  constructor(){
    super();
   
   this.state = {
      emailId : '',
      firstName: '',
      lastName:'',
      phoneNumber: '',
      isBanned: false,
      notification : {
        showNotification: false,
        variant: '',
        message: ''
      },
      redirectTo : false,
      redirectPath: ''
   }

   this.handleChange = this.handleChange.bind(this);
   this.register = this.register.bind(this);
   this.dismissNotification = this.dismissNotification.bind(this);
  }

  // change event handler for all input fields
  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  // dismiss notifications handler for all notifications
  dismissNotification(event) {
    let {notification} = this.state;

    notification.showNotification = false;
    this.setState({...this.state, 'notification': {...notification}});
  }

  // Register or signup new user to the system
  register(event) {
    let {firstName, lastName, isBanned, phoneNumber, emailId} = this.state;
    let user = {
          firstName,
          lastName,
          isBanned,
          phoneNumber,
          emailId
        }
      
      // Remote web service to sign up new user account
      // currently mocked with fake promise 
      AuthenticationService.registerUser(user).then(status => {
        let {notification} = this.state;
     
         if(status) {
           // save the user data for further app processing
          UserDataService.setUserData(user);
          this.setState({...this.state, emailId : '',
                      firstName: '',
                      lastName:'',
                      phoneNumber: '',
                      redirectTo: true,
                      redirectPath : '/dashboard'
                     });
        } else {
          // show snack bar message abt exsiting user
          notification.message = "User Already Exists, Please Sign In";
          notification.variant = 'error';
          notification.showNotification = true;

          this.setState({...this.state, emailId : '',
                      firstName: '',
                      lastName:'',
                      phoneNumber: '',
                     'notification' : {...notification}});
        }
      }).catch(error => {
        let {notification} = this.state;

        notification.message = "User Registration Failed, Validate your data & Try again";
        notification.variant = 'error';
        notification.showNotification = true;

        this.setState({...this.state, 'emailId': '', 'notification' : {...notification}});

      });

    event.preventDefault(); // prevent default form submit action
  }

  render() {

    const { redirectTo , redirectPath,  notification } = this.state;

    // redirect user to login page, if not authorised to access this page
    if (redirectTo === true) {
      return <Redirect to={redirectPath} />
    } 

    return (
      <section className="register-form">
        <Container maxWidth="sm">
          <Paper className="form__fld-cont">
            <form autoComplete="off"  onSubmit={this.register}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-first-name-input"
                        label="First Name"
                        type="text"
                        className= "register-form__txt-fld"
                        margin="normal"
                        variant="outlined"
                        value={this.state.firstName}
                        onChange={this.handleChange('firstName')}
                      />
                </Grid>
                <Grid item xs={12}>
                     <TextField
                        id="outlined-last-name-input"
                        label="Last Name"
                        type="TextField"
                        className= "register-form__txt-fld"
                        name="lastName"
                        margin="normal"
                        variant="outlined"
                        value={this.state.lastName}
                        onChange={this.handleChange('lastName')}
                      />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                      id="outlined-phone-number-input"
                      label="Emergency Phone Number"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange('phoneNumber')}
                      type="number"
                      className= "register-form__txt-fld"
                      variant="outlined"
                      margin="normal"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-email-input"
                        label="Email"
                        className= "register-form__txt-fld"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        value={this.state.emailId}
                        onChange={this.handleChange('emailId')}
                      />
                </Grid>
                <Grid item  xs={12}>
                  <Button type="submit" variant="contained"   className="form-btn active-btn"
                    >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
       <NotificationBar variant={notification.variant}
         msg={notification.message} 
         showNotification={notification.showNotification}
         dismissAfter={notificationDimissTime} 
         onDimiss={this.dismissNotification}>
      </NotificationBar>
      </section>
    );
  }
}

export default RegisterForm;