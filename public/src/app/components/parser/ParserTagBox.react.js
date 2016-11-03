import React from 'react';
import dagre from 'dagre';
import cytoscape from 'cytoscape';
import cydagre from 'cytoscape-dagre';
import Chip from 'material-ui/Chip';
import ReactTooltip from 'react-tooltip';
import RaisedButton from 'material-ui/RaisedButton';
import {blueA400,blueA300, indigoA400,pinkA400,redA400,purpleA400,deepPurpleA400,lightBlueA400,
  cyanA400,tealA400,greenA400,lightGreenA400,limeA400,yellowA200,amberA400,orangeA400,
  deepOrangeA400,brown500,blueGrey500,grey500
} from 'material-ui/styles/colors';

cydagre( cytoscape, dagre );

const grapghstyle={
  width:400,
  height:400
};

const tagstyles = {
  tag: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
};


class ParserTagBox extends React.Component{

  constructor(props) {
      super(props);
      this.state = {tagData: [
        {word: 'ohu',tag:'NPD'},
        {word: 'gedara',tag:'NPD'},
        {word: 'duwamin',tag:'KRV'},
        {word: 'giyeeya',tag:'KPD'},
        ],
        tags:[]
   }

  }

  tagger = () => {
   let NewTaggedArray = [];
   this.state.tagData.map((words)=>{

      switch (words.tag) {
        case 'NPD':
            NewTaggedArray.push({tag:'Namapadha',word:words.word,color:blueA400});
          break;
        case 'KPD':
            NewTaggedArray.push({tag:words.tag,word:words.word,color:pinkA400});
          break;
          case 'NMV':
            NewTaggedArray.push({tag:words.tag,word:words.word,color:grey500});
          break;
          case 'KRV':
            NewTaggedArray.push({tag:words.tag,word:words.word,color:deepPurpleA400});
          break;
          case 'NIP':
            NewTaggedArray.push({tag:words.tag,word:words.word,color:cyanA400});
          break;
          case 'KRU':
            NewTaggedArray.push({tag:words.tag,word:words.word,color:lightGreenA400});
          break;
          case 'UPS':
            NewTaggedArray.push({tag:words.tag,word:words.word,color:yellowA200});
          break;
          case 'MIS':
            NewTaggedArray.push({tag:words.tag,word:words.word,color:brown500});
          break;

        default:

      }

   });

   this.setState({ tags: NewTaggedArray });
   console.log(NewTaggedArray);

 }



      render(){
        return(
          <div>
            <RaisedButton secondary={true} label="tag" onTouchTap={this.tagger} />
          </div>
        );
      }

}

export default ParserTagBox;
