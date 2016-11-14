import React from 'react';
import Chip from 'material-ui/Chip';
import ReactTooltip from 'react-tooltip';
import RaisedButton from 'material-ui/RaisedButton';
import {deepPurpleA100,pinkA200,orangeA400,indigo400,greenA400,lightGreenA400,yellowA200,brown300,
  lightBlue400,blueA400,blueA300, indigoA400,pinkA400,redA400,purpleA400,deepPurpleA400,lightBlueA400,
  cyanA400,tealA400,limeA400,amberA400,deepOrangeA400,brown500,blueGrey500,grey500,grey50,blue200,lightGreenA200
} from 'material-ui/styles/colors';
import ParserTree from './ParserTree.react';

const grapghstyle={
  marginLeft: 50,
  width:1800,
  height:500
};

class ParserTreeBox extends React.Component{

  constructor(props) {
    super(props);
      this.state = {
        data: []
      }
  }

  listItems = (obj) => {

     var key = 0;
     let tags = (function recurse(obj, parent = undefined) {
         return Object(obj) !== obj ? { key: ++key,fill: blue200, stroke: "#4d90fe", text: obj, parent }
             :   Array.isArray(obj) ? Object.keys(obj).reduce( (acc, text) =>
                     acc.concat(recurse(obj[text], parent)), [])
             :   Object.keys(obj).reduce( (acc, text) =>
                     acc.concat({ key: ++key,fill: grey50, stroke: "#4d90fe", text, parent },
                                 recurse(obj[text], key)), []);
     })(obj);

     tags = this.fillColours(tags);
     return tags;

  }

  fillColours = (tags) => {

    let NewTaggedArray = [];
    tags.map((result)=>{

      if(result.fill === '#90caf9') {

        let parent = result.parent;

        tags.map((words) => {

          if(words.key === parent) {

            switch (words.text) {
              case 'NMP':
                NewTaggedArray.push({key:result.key , fill:indigo400 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break;
              case 'KPD,':
                NewTaggedArray.push({key:result.key , fill:pinkA200 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break;
              case 'KPD':
                NewTaggedArray.push({key:result.key , fill:pinkA200 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break;
              case 'NMV':
                NewTaggedArray.push({key:result.key , fill:orangeA400 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break;
              case 'KRW':
                NewTaggedArray.push({key:result.key , fill:lightBlue400 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break;
              case 'NIP':
                NewTaggedArray.push({key:result.key , fill:yellowA200 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break;
              case 'KRU':
                NewTaggedArray.push({key:result.key , fill:lightGreenA400 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break;
              case 'UPS':
                NewTaggedArray.push({key:result.key , fill:deepPurpleA100 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break;
              case 'MK':
                NewTaggedArray.push({key:result.key , fill:brown300 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break;
              case 'SAM':
                NewTaggedArray.push({key:result.key , fill:lightGreenA200 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
                break
              default:

            }
          }

        });
      }
      else {
        NewTaggedArray.push({key:result.key , fill:grey50 , stroke:"#4d90fe" , text:result.text , parent:result.parent});
      }
    });

    return NewTaggedArray;
  }

   render(){
     return(
        <div>
          <div>
            <ParserTree data={this.listItems(this.props.mytag)} />
          </div>
        </div>
     );
   }

}

export default ParserTreeBox;
