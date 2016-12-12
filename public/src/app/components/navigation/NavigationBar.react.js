import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import SPlogo from '../../media/images/logo.png';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';


const style = {
  margin: 12,
};

const logoStyle = {
   width:40,
   height:50,
   margin:10
};

const ButtonStyle = {

  buttondivStyle:{
      padding:2,
      margin:10
  },
  buttonlabelStyle:{
    color:'white',
  }
};

class NavigationBar extends React.Component{

      render(){
        return(
          <div>
          <AppBar
            className="navbar"
            title={<div><Link to="/parser"><img src={SPlogo} style={logoStyle}/></Link>Sinhala Parser</div>}
            showMenuIconButton={false}
            iconElementRight={
              <div className="row"  style={ButtonStyle.buttondivStyle} >
              <Link to="/about"><FlatButton className="col-xs-5 col-sm-5 col-md-5" style={ButtonStyle.buttonlabelStyle} label="About SP" /></Link>
              </div>
            }
          />
           {this.props.children}
          </div>
        );
      }

}

export default NavigationBar;
