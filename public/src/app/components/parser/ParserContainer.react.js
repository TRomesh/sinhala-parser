import React from 'react';
import PaserBox from './PaserBox.react';
import RaisedButton from 'material-ui/RaisedButton';


class ParserContainer extends React.Component{

    render(){
        return(
          	<div className="column" style={{'overflow-x':'hidden'}}>
        	  	<div className="row">
	          		<div className="col-md-12">
	          			<PaserBox/>
	          		</div>
	        	</div>
        	</div>
        );
    }
}

export default ParserContainer;
