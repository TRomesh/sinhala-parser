import React from 'react';

import SPlogo from '../../media/images/SP.png';

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
