import React from 'react';
import PaserBox from './PaserBox.react';
import RaisedButton from 'material-ui/RaisedButton';
import sinhala from '../../media/images/sinhala.svg';
import json from '../../media/images/json.svg';
import xml from '../../media/images/xml.svg';
import {amberA100} from 'material-ui/styles/colors';

const logoStyle = {
   width:100,
   height:100,
   marginTop: 30,
   marginBottom: 10
};

const logotextStyle={
  paddingTop: 60,
};

const styles = {
    backgroundColor: amberA100,
    marginLeft: 300,
    marginRight: 300,
    borderRadius: 10,
    height: 100,
    padding: 20,
    marginBottom: 30,
    marginTop: 10,
};

class ParserContainer extends React.Component{

    render(){
        return(
          	<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 column">
        	  	<div className="row">
	          		<div>
	          			<PaserBox/>
	          		</div>
	        	</div>
                <div className="row" style={styles}>
                    <center>
                        <span><h4>The tagging works better when grammar and orthography are correct</h4></span>
                    </center>
                    <center>
                        <span><h4>Computers make mistakes too!</h4></span>
                    </center>
                </div>
                <div className="row">
                    <center>
                        <span><h3><b>Featured Sinhala Parser</b></h3></span>
                    </center>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1" style={{marginRight: 40}}/>
                    <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
                        <img src={json} style={logoStyle}/>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <h5 style={logotextStyle}>Sinhala Parser API supports JSON</h5>
                    </div>
                    <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
                        <img src={xml} style={logoStyle}/>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <h5 style={logotextStyle}>Sinhala Parser API supports XML</h5>
                    </div>
                    <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1">
                        <img src={sinhala} style={logoStyle}/>
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                        <h5 style={logotextStyle}>Sinhala Parser API supports Native Sinhala</h5>
                    </div>
                    <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1" />
                </div>
        	</div>
        );
    }
}

export default ParserContainer;
