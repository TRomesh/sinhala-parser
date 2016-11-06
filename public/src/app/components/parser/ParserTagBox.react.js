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
import PTagBox from './PTagBox.react';

cydagre( cytoscape, dagre );

const grapghstyle={
  marginLeft: 50,
  width:1800,
  height:500
};

const nodeDataArray = [
        { key: 1, text: "Sentence", fill: "#f68c06", stroke: "#4d90fe" },
        { key: 2, text: "NP", fill: "#f68c06", stroke: "#4d90fe", parent: 1 },
        { key: 3, text: "DT", fill: "#ccc", stroke: "#4d90fe", parent: 2 },
        { key: 4, text: "A", fill: "#f8f8f8", stroke: "#4d90fe", parent: 3 },
        { key: 5, text: "JJ", fill: "#ccc", stroke: "#4d90fe", parent: 2 },
        { key: 6, text: "rare", fill: "#f8f8f8", stroke: "#4d90fe", parent: 5 },
        { key: 7, text: "JJ", fill: "#ccc", stroke: "#4d90fe", parent: 2 },
        { key: 8, text: "black", fill: "#f8f8f8", stroke: "#4d90fe", parent: 7 },
        { key: 9, text: "NN", fill: "#ccc", stroke: "#4d90fe", parent: 2 },
        { key: 10, text: "squirrel", fill: "#f8f8f8", stroke: "#4d90fe", parent: 9 },
        { key: 11, text: "VP", fill: "#f68c06", stroke: "#4d90fe", parent: 1 },
        { key: 12, text: "VBZ", fill: "#ccc", stroke: "#4d90fe", parent: 11 },
        { key: 13, text: "has", fill: "#f8f8f8", stroke: "#4d90fe", parent: 12 },
        { key: 14, text: "VP", fill: "#f68c06", stroke: "#4d90fe", parent: 11 },
        { key: 15, text: "VBN", fill: "#ccc", stroke: "#4d90fe", parent: 14 },
        { key: 16, text: "become", fill: "#f8f8f8", stroke: "#4d90fe", parent: 15 },
        { key: 17, text: "NP", fill: "#f68c06", stroke: "#4d90fe", parent: 14 },
        { key: 18, text: "NP", fill: "#f68c06", stroke: "#4d90fe", parent: 17 },
        { key: 19, text: "DT", fill: "#ccc", stroke: "#4d90fe", parent: 18 },
        { key: 20, text: "a", fill: "#f8f8f8", stroke: "#4d90fe", parent: 19 },
        { key: 21, text: "JJ", fill: "#ccc", stroke: "#4d90fe", parent: 18 },
        { key: 22, text: "regular", fill: "#f8f8f8", stroke: "#4d90fe", parent: 21 },
        { key: 23, text: "NN", fill: "#ccc", stroke: "#4d90fe", parent: 18 },
        { key: 24, text: "visitor", fill: "#f8f8f8", stroke: "#4d90fe", parent: 23 },
        { key: 25, text: "PP", fill: "#f68c06", stroke: "#4d90fe", parent: 17 },
        { key: 26, text: "TO", fill: "#ccc", stroke: "#4d90fe", parent: 25 },
        { key: 27, text: "to", fill: "#f8f8f8", stroke: "#4d90fe", parent: 26 },
        { key: 28, text: "NP", fill: "#f68c06", stroke: "#4d90fe", parent: 25 },
        { key: 29, text: "DT", fill: "#ccc", stroke: "#4d90fe", parent: 28 },
        { key: 30, text: "a", fill: "#f8f8f8", stroke: "#4d90fe", parent: 29 },
        { key: 31, text: "JJ", fill: "#ccc", stroke: "#4d90fe", parent: 28 },
        { key: 32, text: "suburban", fill: "#f8f8f8", stroke: "#4d90fe", parent: 31 },
        { key: 33, text: "NN", fill: "#ccc", stroke: "#4d90fe", parent: 28 },
        { key: 34, text: "garden", fill: "#f8f8f8", stroke: "#4d90fe", parent: 33 },
        { key: 35, text: ".", fill: "#ccc", stroke: "#4d90fe", parent: 1 },
        { key: 36, text: ".", fill: "#f8f8f8", stroke: "#4d90fe", parent: 35 }
      ];

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
         <PTagBox data={nodeDataArray} />
       </div>
     );
   }

}

export default ParserTagBox;
