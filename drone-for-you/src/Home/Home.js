import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import TabPanel from './../Common/TabPanel.js';
import LoginForm from './../Login/LoginForm.js';
import RegisterForm from './../Register/RegisterForm.js';
import './home.scss';

class Home extends Component {

  constructor(){
    super();
    this.state = {
      value: 0
    };
  }

  // event handler to monitor tab switch 
  handleChange(event, newValue) {
    let state = this.state;

    state.value = newValue;
    this.setState(state);
  }

  render() {
    return (
      <section className="home-cont">
        <div>
          <h1>Drone For You - Rent a drone</h1>
          <Container maxWidth="sm">
            <Paper square >
              <Tabs
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="Icon label tabs example"
              >
                <Tab icon={<FavoriteIcon />} label="LOGIN" />
                <Tab icon={<PersonPinIcon />} label="REGISTER" />
              </Tabs>
               <TabPanel value={this.state.value} index={0}>
                <LoginForm></LoginForm>
              </TabPanel>
              <TabPanel value={this.state.value} index={1}>
                <RegisterForm></RegisterForm>
              </TabPanel>
            </Paper>
          </Container>
        </div>
      </section>
    );
  }
}

export default Home;