import React from 'react';
import PaserBox from './PaserBox.react';
import { Link } from 'react-router';
import Parserlogo from './Parserlogo.react';
import RaisedButton from 'material-ui/RaisedButton';


class ParserContainer extends React.Component{

      render(){
        return(
          <div className="column">
            <PaserBox/>
            <Link to={"/tag"}><RaisedButton  secondary={true} label="Parse"/></Link>
          </div>
        );
      }

}

export default ParserContainer;
