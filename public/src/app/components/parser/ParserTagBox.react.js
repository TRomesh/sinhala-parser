import React from 'react';
import dagre from 'dagre';
import cytoscape from 'cytoscape';
import cydagre from 'cytoscape-dagre';
import Chip from 'material-ui/Chip';
import ReactTooltip from 'react-tooltip';
import RaisedButton from 'material-ui/RaisedButton';
import {deepPurpleA100,pinkA200,orangeA400,indigo400,greenA400,lightGreenA400,yellowA200,brown300,
  lightBlue400,blueA400,blueA300, indigoA400,pinkA400,redA400,purpleA400,deepPurpleA400,lightBlueA400,
  cyanA400,tealA400,limeA400,amberA400,deepOrangeA400,brown500,blueGrey500,grey500
} from 'material-ui/styles/colors';

cydagre( cytoscape, dagre );

const grapghstyle={
  marginLeft: 50,
  width:800,
  height:500
};

class ParserTagBox extends React.Component{

  constructor(props) {
    super(props);
      this.state = {
        data: [{
          id: '',
          source: '',
          target: ''
        }]
      }
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
                    'width': 120,
                    'background-fit': 'cover',
                    'border-color': pinkA400,
                    'border-width': 3,
                    'border-opacity': 0.5,
                    'content': 'data(id)',
                    'text-valign': 'center',
                    'shape':'roundrectangle'
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
        this.cy.userPanningEnabled( false );
        this.cy.on('mouseover', 'node', function(evt){
                    console.log( 'mouseover ' + this.id());
                });
    }

    componentDidMount(){
     this.renderCytoscapeElement();
    }


   render(){
     return(
       <div>
         <div id="cy" style={grapghstyle}></div>
       </div>
     );
   }

}

export default ParserTagBox;
