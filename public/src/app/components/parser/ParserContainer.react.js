import React from 'react';
import PaserBox from './PaserBox.react';
import RaisedButton from 'material-ui/RaisedButton';


class ParserContainer extends React.Component{

    render(){
        return(
          	<div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 column">
        	  	<div className="row">
	          		<div>
	          			<PaserBox/>
	          		</div>
	        	</div>
        	</div>
        );
    }
}

export default ParserContainer;
