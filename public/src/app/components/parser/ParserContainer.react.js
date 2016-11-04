import React from 'react';
import PaserBox from './PaserBox.react';
import ParserTags from './ParserTags.react';
import Parserlogo from './Parserlogo.react';
import RaisedButton from 'material-ui/RaisedButton';

class ParserContainer extends React.Component{

    render(){
        return(
        	<div className="column">
	          	<div className="col-lg-8">
	          		<PaserBox/>
	          	</div>
	          	<div className="col-lg-4">
	          		<ParserTags/>
	          	</div>
	        </div>
        );
    }
}

export default ParserContainer;
