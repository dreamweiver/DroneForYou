import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthenticationService from './../Services/AuthenticationService';
import UserDataService from './../Services/UserService';
import { Redirect } from 'react-router-dom';
import NotificationBar from './../Common/Notification';

import './login-form.scss';

const notificationDimissTime =  5000;
class LoginForm extends Component {

  constructor(){
    super();
   
   this.state = {
    emailId : ' ',
    redirectTo : false,
    notification : {
      showNotification: false,
      variant: '',
      message: ''
    }
   }

   this.handleChange = this.handleChange.bind(this);
   this.login = this.login.bind(this);
   this.dismissNotification = this.dismissNotification.bind(this);

  }

  // dismiss notification handler for all notifications on this view
  dismissNotification(event) {
    let {notification} = this.state;

    notification.showNotification = false;
    this.setState({...this.state, 'notification': {...notification}});
  }

  // change handler for input fields
  handleChange(event) { 
    this.setState({ ...this.state, 'emailId' : event.target.value});
  }

  // login functionality
  login(event) {
    debugger;
    let isAuthenticated = false;
    let userData;

    // Remote service call to authenticate user
    // currently mocked with a promise
    AuthenticationService.loginUser(this.state.emailId).then(data =>{
      userData = data;
      isAuthenticated = AuthenticationService.isLoggedIn();

      // save the user data for further app processing
      UserDataService.setUserData(userData);
      this.setState({...this.state, 'redirectTo': isAuthenticated});
    }).catch(error => {

      let {notification} = this.state;

      notification.showNotification = true;
      notification.message = "Login Failed, try again with valid Email Id";
      notification.variant = 'error';

      this.setState({...this.state, 'redirectTo': false, 'notification' : {...notification}});
    });

    event.preventDefault(); // prevent the default form submit action
  }

  render() {

    const { from } = this.props.location || { from: { pathname: '/dashboard' } };
    const { redirectTo, notification } = this.state;

    // Authentication Guard to protect un-authorised access to app
    if (redirectTo === true) {
      return <Redirect to={from} />
    } 

    return (
      <section className="login-form">
        <Container maxWidth="sm">
          <Paper className="form__fld-cont">
            <form autoComplete="off"  onSubmit={this.login}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-email-input"
                        label="Email"
                        className= "login-form__txt-fld"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        value={this.state.emailId}
                        onChange={this.handleChange}
                      />
                </Grid>
                <Grid item  xs={12}>
                    <Button variant="contained" type="submit"  
                          className="form-btn active-btn">
                      Sign in
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

export default LoginForm;