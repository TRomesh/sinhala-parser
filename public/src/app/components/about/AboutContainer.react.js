import React from 'react';

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
              <img src={SPlogo} style={logoStyle}/>
            </div>
          </div>
        );
      }

}
export default AboutContainer;
