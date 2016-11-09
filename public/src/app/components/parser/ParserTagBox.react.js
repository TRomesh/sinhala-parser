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


      var tagdata= {
        "Sentence": [
          {
            "NP": [
              {
                "NMP": "මුහුදු"
              },
              {
                "NMP": "වෙරළට"
              }
            ]
          },
          {
            "VP": [
              {
                "KPD": "එන"
              },
              {
                "NP": [
                  {
                    "NMP": "රළපෙළ"
                  },
                  {
                    "NMP": "සුදු"
                  }
                ]
              },
              {
                "NP": [
                  {
                    "NMP": "සාරියක්"
                  },
                  {
                    "NMP": "මෙන්ය"
                  }
                ]
              }
            ]
          }
        ]
      };

var tagdata1 = {
  "Sentence": [
    {
      "NP": [
        {
          "NMP": "වලාකුළු"
        }
      ]
    },
    {
      "NIP": "අතරින්"
    },
    {
      "VP": [
        {
          "KPD": "එබී"
        }
      ]
    },
    {
      "VP": [
        {
          "KPD": "බලන"
        },
        {
          "NP": [
            {
              "NMP": "සුපුන්"
            },
            {
              "NMP": "සද"
            }
          ]
        },
        {
          "NP": [
            {
              "NMP": "සිය"
            }
          ]
        }
      ]
    },
    {
      "SAM": "රැස්දහරා"
    },
    {
      "MK": "පතුරවමින්"
    },
    {
      "NP": [
        {
          "NMP": "අප"
        },
        {
          "NMP": "සිත්"
        }
      ]
    },
    {
      "NP": [
        {
          "NMP": "පුබුදු"
        }
      ]
    },
    {
      "KPD": "කරයි"
    }
  ]
};

var tagdata2 = {
  "Sentence": [
    {
      "NP": [
        {
          "NMP": "ඔවුන්"
        },
        {
          "NMP": "දෙදෙනාගේ"
        }
      ]
    },
    {
      "NP": [
        {
          "NMP": "ආදරයට"
        },
        {
          "NMP": "දෙමාපියන්ගේ"
        }
      ]
    },
    {
      "KRW": "ආශිර්වාදය"
    },
    {
      "NP": [
        {
          "NMP": "ලැබුණි"
        }
      ]
    }
  ]
};

var tagdata3 = {
  "Sentence": [
    {
      "NP": [
        {
          "NMP": "රාජ"
        },
        {
          "NMP": "කුමාරයාගේ"
        }
      ]
    },
    {
      "VP": [
        {
          "KPD": "රාජාභිෂේකය"
        },
        {
          "NP": [
            {
              "NMP": "නිමිත්තෙන්"
            },
            {
              "NMP": "රටවැසියෝ"
            }
          ]
        },
        {
          "NP": [
            {
              "NMP": "ප්‍රීතිඝෝෂා"
            }
          ]
        }
      ]
    },
    {
      "KPD,": "පැවැත්වුවෝය"
    }
  ]
};

var tagdata4 ={
  "Sentence": [
    {
      "NP": [
        {
          "NMP": "විභාගය"
        }
      ]
    },
    {
      "VP": [
        {
          "KPD": "අසමත්"
        },
        {
          "NP": [
            {
              "NMP": "වූ"
            },
            {
              "NMP": "නිසා"
            }
          ]
        },
        {
          "NP": [
            {
              "NMP": "ඇයට"
            },
            {
              "NMP": "නැවත"
            }
          ]
        },
        {
          "NP": [
            {
              "NMP": "මුදල්"
            },
            {
              "NMP": "ගෙවා"
            }
          ]
        },
        {
          "NP": [
            {
              "NMP": "විභාගය"
            },
            {
              "NMP": "කිරිර්මට"
            }
          ]
        },
        {
          "NP": [
            {
              "NMP": "සිදු"
            },
            {
              "NMP": "විය"
            }
          ]
        }
      ]
    }
  ]
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

  fillColor = (data) => {

          switch (data) {
            case 'NPD':
                return {indigo400};
              break;
            case 'KPD':
                return pinkA200;
              break;
            case 'NMV':
                return orangeA400;
              break;
            case 'KRV':
                return lightBlue400;
              break;
            case 'NIP':
                return yellowA200;
              break;
            case 'KRU':
                return lightGreenA400;
              break;
            case 'UPS':
                return deepPurpleA100;
              break;
            case 'MK':
                return brown300;
              break;

            default:
             return pinkA200;

          }

    };



  listItems = (obj) => {

     var key = 0;
     return (function recurse(obj, parent = undefined) {
         return Object(obj) !== obj ? { key: ++key,fill: blueA400, stroke: "#4d90fe", text: obj, parent }
             :   Array.isArray(obj) ? Object.keys(obj).reduce( (acc, text) =>
                     acc.concat(recurse(obj[text], parent)), [])
             :   Object.keys(obj).reduce( (acc, text) =>
                     acc.concat({ key: ++key,fill: pinkA200, stroke: "#4d90fe", text, parent },
                                 recurse(obj[text], key)), []);
     })(obj);

 }

   render(){
     return(
       <div>
         <PTagBox data={this.listItems(tagdata1)} />
       </div>
     );
   }

}

export default ParserTagBox;
