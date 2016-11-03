import React from 'react';
import { Link } from 'react-router';
import SPlogo from '../../media/images/SP.png';

const logoStyle = {
   width:120,
   height:90
};


class AboutContainer extends React.Component{

      render(){
        return(
          <div>
            <h1>Sinhala Parser About</h1>
            <div>
              <Link to={"/parser"} ><img src={SPlogo} style={logoStyle}/></Link>
            </div>
          </div>
        );
      }

}
export default AboutContainer;
