import React from 'react';
import PaserBox from './PaserBox.react';
import RaisedButton from 'material-ui/RaisedButton';
import jsonLogo from '../../media/images/json.png';
import xmlLogo from '../../media/images/XML.png';
import json from '../../media/images/json.svg';
import xml from '../../media/images/xml.svg';
import {amber200} from 'material-ui/styles/colors';

const logoStyle = {
   width:100,
   height:100,
   marginTop: 50,
};

const logotextStyle={
  padding:0,
  paddingRight:30
};

const styles = {
    backgroundColor: amber200,
    marginLeft: 300,
    marginRight: 300,
    borderRadius: 10,
    height: 100,
    padding: 20,
    marginBottom: 20,
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
                    <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3" />
                    <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3" >
                        <img src={json} style={logoStyle}/>
                        <div className="row">
                          <center>
                        <span><h4 style={logotextStyle} className="col-md-6 col-sm-6 col-xs-6 col-lg-6">Sinhala Parser API supports JSON</h4></span>
                        </center>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3" >
                        <img src={xml} style={logoStyle}/>
                        <div className="row">
                          <center>
                            <span><h4 style={logotextStyle} className="col-md-6 col-sm-6 col-xs-6 col-lg-6">Sinhala Parser API supports XML</h4></span>
                          </center>
                          </div>
                       </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 col-lg-3" />
                </div>
        	</div>
        );
    }
}

export default ParserContainer;
