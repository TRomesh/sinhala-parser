import React from 'react';
import { Link } from 'react-router';
import SPlogo from '../../media/images/logo.png';

const logoStyle = {
   width:120,
   height:150,
   padding:10
};


class AboutContainer extends React.Component{

      render(){
        return(
          <div>
            <h1>Sinhala Parser</h1>
            <p>Sinhala parser mainly focuses on creating a parser which can identify Sinhala sentences and create a parsed tree, a classification for each and every word that consists in the sentence passed as the input for the parser. In the process of achieving this particular goal, Scikit learn library plays the main role since the project uses this library parts of speech tagging. Programming language used with this particular library is Python. Choice of the language with the library is good combination since Python can be used to achieve hectic tasks in simpler approaches. Python tends to be the top choice in machine learning. Therefore Python was a obvious choice for this project. End result would be to create a product out the parser. The functionality of this parser can be exposed as an API for any client program to consume. In this project the scope has been setup to create a web client which consumes the API exposed. Therefore the web client will display the classification of a given Sinhala sentence as well as the parsed tree structure of the given sentence, which will look similar to given below diagram.</p>
            <div>
              <Link to={"/parser"} ><img src={SPlogo} style={logoStyle}/></Link>
            </div>
          </div>
        );
      }

}
export default AboutContainer;
