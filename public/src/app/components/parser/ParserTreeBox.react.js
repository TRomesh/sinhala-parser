import React from 'react';
import Chip from 'material-ui/Chip';
import ReactTooltip from 'react-tooltip';
import RaisedButton from 'material-ui/RaisedButton';
import {blue200,pink300,deepOrangeA100,deepPurpleA100,lightGreenA200,amberA100,teal200,brown200,blueGrey100,grey50,
} from 'material-ui/styles/colors';
import ParserTree from './ParserTree.react';
import Actions from '../../Actions/Actions';
import Store from '../../Store/Store';

/*const grapghstyle={
  marginLeft: 50,
  width:1800,
  height:500
};*/

class ParserTreeBox extends React.Component{

  constructor(props) {
    super(props);
      this.state = {
        data: [],
        taggedData:{}
      }

     this._onChange = this._onChange.bind (this);
  }

  componentWillMount(){
    Store.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    Store.removeChangeListener(this._onChange);
  }

  _onChange(){
     this.setState({taggedData:Store.getData()});
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
                NewTaggedArray.push({key:result.key , fill:blue200 , stroke:blue200 , text:result.text , parent:result.parent});
                break;
              case 'KPD,':
                NewTaggedArray.push({key:result.key , fill:pink300 , stroke:pink300 , text:result.text , parent:result.parent});
                break;
              case 'KPD':
                NewTaggedArray.push({key:result.key , fill:pink300 , stroke:pink300 , text:result.text , parent:result.parent});
                break;
              case 'NMV':
                NewTaggedArray.push({key:result.key , fill:deepOrangeA100 , stroke:deepOrangeA100 , text:result.text , parent:result.parent});
                break;
              case 'KRW':
                NewTaggedArray.push({key:result.key , fill:deepPurpleA100 , stroke:deepPurpleA100 , text:result.text , parent:result.parent});
                break;
              case 'NIP':
                NewTaggedArray.push({key:result.key , fill:lightGreenA200 , stroke:lightGreenA200 , text:result.text , parent:result.parent});
                break;
              case 'KRU':
                NewTaggedArray.push({key:result.key , fill:amberA100 , stroke:amberA100 , text:result.text , parent:result.parent});
                break;
              case 'UPS':
                NewTaggedArray.push({key:result.key , fill:teal200 , stroke:teal200 , text:result.text , parent:result.parent});
                break;
              case 'MK':
                NewTaggedArray.push({key:result.key , fill:brown200 , stroke:brown200 , text:result.text , parent:result.parent});
                break;
              case 'SAM':
                NewTaggedArray.push({key:result.key , fill:blueGrey100 , stroke:blueGrey100 , text:result.text , parent:result.parent});
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
            <ParserTree data={this.listItems(this.state.taggedData)} />
          </div>
        </div>
     );
   }

}

export default ParserTreeBox;
