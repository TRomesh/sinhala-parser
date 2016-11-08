import React from 'react';
import { Link } from 'react-router';
import SPlogo from '../../media/images/logo.png';

const logoStyle = {
   width:120,
   height:90
}

class Parserlogo extends React.Component{

      render(){
        return(
          <div>
            <Link to={"/parser"} ><img src={SPlogo} style={logoStyle}/></Link>
          </div>
        );
      }

}

export default Parserlogo;
