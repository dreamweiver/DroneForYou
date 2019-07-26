import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import FaceIcon from '@material-ui/icons/Face';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
}));

function HeaderAppBar(props) {
  const { countDownValue,
          onDroneReturn,
          loggedInUser, 
          isUserBanned
        } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuId = 'profile-account-menu';
  const isMenuOpen = Boolean(anchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  // show the count down timer on header
  function _getCountDownTimer() {
    if(!!countDownValue) {
      return `Time Remaining - ${countDownValue}`;
    }

    return '';
  }

  // Return the drone to station 
  function _returnDroneToStation() {
    onDroneReturn(); // call base handler to return the Drone back to its station
  }

  // Show Banned user tag on header , if user is banned
  function _checkForBannedUser() {
    return isUserBanned ? <Chip
              icon={<FaceIcon />}
              color="secondary"
              label="BANNED"
              className="margin3"
            /> : '';
  }

  return (
    <div className="header-app-bar">
      <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Drone For You 
            </Typography>
            <div className={classes.grow} />
            <Typography  noWrap> {
              _getCountDownTimer()
            }
            </Typography>
            <div className={classes.grow} />
            <Button variant="contained" color="primary" className="margin3"
              onClick={_returnDroneToStation} disabled={!countDownValue}>
              Return Drone
            </Button>
            <div className={classes.grow} />
            {
              _checkForBannedUser()
            }
            <b> {loggedInUser} </b>
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="Account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
        </Menu>
      </div>
  );
}

export default HeaderAppBar


