import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

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
            title="Sinhala Parser"
            iconElementRight={
              <div className="row"  style={ButtonStyle.buttondivStyle} >
              <FlatButton className="col-xs-6 col-sm-6 col-md-6" style={ButtonStyle.buttonlabelStyle} label="Contribute" />
              <div className="col-xs-1 col-sm-1 col-md-1" />
              <FlatButton className="col-xs-5 col-sm-5 col-md-5" style={ButtonStyle.buttonlabelStyle} label="About SP" />
              </div>
            }
            />
        </div>
      );
    }   

}

export default NavigationBar;
