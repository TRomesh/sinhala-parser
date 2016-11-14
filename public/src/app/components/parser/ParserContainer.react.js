import React from 'react';
import PaserBox from './PaserBox.react';
import ParserTreeBox from'./ParserTreeBox.react';
import ParserTags from './ParserTags.react';
import RaisedButton from 'material-ui/RaisedButton';


class ParserContainer extends React.Component{

    render(){
        return(
          <div className="column">
        	  <div className="row">
	          	<div className="col-md-10">
	          		<PaserBox/>
	          	</div>
	          	<div className="col-md-2">
	          		<ParserTags/>
	          	</div>
	         </div>
           <div className="row">
           <div  className="col-md-12">
             <ParserTreeBox/>
           </div>
          </div>
        </div>
        );
    }
}

export default ParserContainer;
