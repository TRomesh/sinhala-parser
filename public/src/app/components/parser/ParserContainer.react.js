import React from 'react';
import PaserBox from './PaserBox.react';
import ParserTags from './ParserTags.react';
import Parserlogo from './Parserlogo.react';


class ParserContainer extends React.Component{

      render(){
        return(
          <div className="column">
            <PaserBox/>
            <ParserTags/>
          </div>
        );
      }

}

export default ParserContainer;
