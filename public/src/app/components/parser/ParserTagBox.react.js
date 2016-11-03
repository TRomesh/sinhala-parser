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



   renderCytoscapeElement(){

        console.log('* Cytoscape.js is rendering the graph..');

        this.cy = cytoscape(
        {
            container: document.getElementById('cy'),

            boxSelectionEnabled: false,
            autounselectify: true,

            style: cytoscape.stylesheet()
                .selector('node')
                .css({
                    'height': 80,
                    'width': 80,
                    'background-fit': 'cover',
                    'border-color': pinkA400,
                    'border-width': 3,
                    'border-opacity': 0.5,
                    'content': 'data(id)',
                    'text-valign': 'center',
                })
                .selector('edge')
                .css({
                    'width': 6,
                    'target-arrow-shape': 'triangle',
                    'line-color': blueA400,
                    'target-arrow-color': blueA400,
                    'curve-style': 'bezier'
                })
                ,
            elements: {
                nodes: [

                    { data: { id: 'bird' } },
                    { data: { id: 'ladybug' } },
                    { data: { id: 'aphid' } },
                    { data: { id: 'rose' } },
                    { data: { id: 'grasshopper' } },
                    { data: { id: 'plant' } },
                    { data: { id: 'wheat' } }
                ],
                edges: [

                    { data: { source: 'bird', target: 'ladybug' } },
                    { data: { source: 'bird', target: 'grasshopper' } },
                    { data: { source: 'grasshopper', target: 'plant' } },
                    { data: { source: 'grasshopper', target: 'wheat' } },
                    { data: { source: 'ladybug', target: 'aphid' } },
                    { data: { source: 'aphid', target: 'rose' } }
                ]
            },

            layout: {
                name: 'breadthfirst',
                directed: true,
                padding: 10
            }
            });
    }

    componentDidMount(){
     this.renderCytoscapeElement();
    }


    renderTag = (data,i) => {
      return (
       <div key={i}>
      <Chip key={i} style={tagstyles.tag} data-tip={data.tag} backgroundColor={data.color}>{data.word}</Chip>
      <ReactTooltip place="bottom" type="dark" effect="float"/>
      </div>
     );
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
