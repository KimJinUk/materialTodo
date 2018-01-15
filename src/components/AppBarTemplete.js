import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';

class Login extends Component {

	constructor(props) {
		super(props)

		let muiName = 'FlatButton';	
	}
	

	render() {
		return(
			<FlatButton {...this.props} label="Login"/>
		);
	}
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      	<IconButton>
      		<MoreVertIcon />
      	</IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class AppBarTemplete extends Component {

	constructor(props) {
		super(props)

		this.state = {
    		logged: true,
        open: false
  		};

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
	}

  handleToggle() {
    this.setState({open: !this.state.open});  
  }
  

  handleClose() {
    this.setState({open: false});
  }

  	render() {
  		return (
  			<MuiThemeProvider>
          <div>
  					<AppBar
  						title="To do List"
              onLeftIconButtonClick={this.handleToggle}
  						iconElementRight={this.state.logged ? <Logged /> : <Login />}
  						style={{textAlign:"center"}}
  					/>

            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem 
                leftIcon={<FontIcon className="material-icons">home</FontIcon>} 
                onClick={this.handleClose}
              >
                Home
              </MenuItem>
              <MenuItem 
                leftIcon={<FontIcon className="material-icons">delete</FontIcon>} 
                onClick={this.handleClose}
              >
                Home
              </MenuItem>
            </Drawer>
          </div>
			</MuiThemeProvider>
  		)
  	}
}

export default AppBarTemplete;