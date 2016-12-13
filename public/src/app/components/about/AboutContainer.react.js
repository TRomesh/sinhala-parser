import React from 'react';
import { Link } from 'react-router';
import SPlogo from '../../media/images/logo.png';
import SLIITlogo from '../../media/images/sliit.png';

const logoStyle = {
   width:120,
   height:150,
   padding:10
};

const textstyle = {
   padding:60
};

class AboutContainer extends React.Component{

      render(){
        return(
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 column">
            <center>
            <div>
              <Link to={"/"} ><img src={SLIITlogo} style={logoStyle}/></Link>
              <img src={SPlogo} style={logoStyle}/>
            </div>
          </center>
          <center>
            <h1>Sinhala Parser</h1>
            <span><p style={textstyle}>Sinhala parser mainly focuses on creating a parser which can identify Sinhala sentences and create a parsed tree, a classification for each and every word that consists in the sentence passed as the input for the parser. In the process of achieving this particular goal, Scikit learn library plays the main role since the project uses this library parts of speech tagging. Programming language used with this particular library is Python. Choice of the language with the library is good combination since Python can be used to achieve hectic tasks in simpler approaches. Python tends to be the top choice in machine learning. Therefore Python was a obvious choice for this project. End result would be to create a product out the parser. The functionality of this parser can be exposed as an API for any client program to consume. In this project the scope has been setup to create a web client which consumes the API exposed. Therefore the web client will display the classification of a given Sinhala sentence as well as the parsed tree structure of the given sentence,which will look similar to given below diagram.</p>
          </span>
         </center>
          </div>
        );
      }

}
export default AboutContainer;
