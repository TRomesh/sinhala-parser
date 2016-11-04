import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import ParserTagBox from './ParserTagBox.react';
import {deepPurpleA100,pinkA200,orangeA400,indigo400,greenA400,lightGreenA400,yellowA200,brown300,
  lightBlue400,blueA400,blueA300, indigoA400,pinkA400,redA400,purpleA400,deepPurpleA400,lightBlueA400,
  cyanA400,tealA400,limeA400,amberA400,deepOrangeA400,brown500,blueGrey500,grey500
} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import ReactTooltip from 'react-tooltip';

const style = {
  height: 120,
  width: 650,
  margin: 50,
  display: 'inline-block',
  padding: 10
};

const textfieldstyle = {
    marginBottom:10
};

const tagstyles = {
  tag: {
    margin: 4,
  },
  wrapper: {
    marginLeft: 70,
    display: 'flex',
    flexWrap: 'wrap',
  }
};


const validatebox = (textStatus) => {

    if (textStatus.length > 100) {
      return {
              error: '*status is too long',
            };
    }  else if (textStatus === '') {
      return {
              error: '*status cannot be empty',
            };
    }  else {
      return true;
    }
}


class PaserBox extends React.Component{

      constructor(props) {
            super(props);
            this.state = {
              textStatus: '',

              tagData: [
                {word: 'sudu',tag:'NMV'},
                {word: 'nandha',tag:'NPD'},
                {word: 'samaga',tag:'NIP'},
                {word: 'amma',tag:'NPD'},
                {word: 'ikmanin',tag:'KRV'},
                {word: 'gedara',tag:'NPD'},
                {word: 'paminiyaya',tag:'KPD'},
                ],

              tags:[]
            };
      };

      tagger = () => {
        let NewTaggedArray = [];
        this.state.tagData.map((words)=>{

            switch (words.tag) {
              case 'NPD':
                  NewTaggedArray.push({tag:words.tag,word:words.word,color:indigo400});
                break;
              case 'KPD':
                  NewTaggedArray.push({tag:words.tag,word:words.word,color:pinkA200});
                break;
              case 'NMV':
                  NewTaggedArray.push({tag:words.tag,word:words.word,color:orangeA400});
                break;
              case 'KRV':
                  NewTaggedArray.push({tag:words.tag,word:words.word,color:lightBlue400});
                break;
              case 'NIP':
                  NewTaggedArray.push({tag:words.tag,word:words.word,color:yellowA200});
                break;
              case 'KRU':
                  NewTaggedArray.push({tag:words.tag,word:words.word,color:lightGreenA400});
                break;
              case 'UPS':
                  NewTaggedArray.push({tag:words.tag,word:words.word,color:deepPurpleA100});
                break;
              case 'MK':
                  NewTaggedArray.push({tag:words.tag,word:words.word,color:brown300});
                break;

              default:

            }

        });

        this.setState({ tags: NewTaggedArray });
        console.log(NewTaggedArray);

      };

      parse = () =>{
        let val = true;
        let status = this.refs.textinput.getValue();
                  
        if(validatebox(status).error) {
          this.setState({
            textStatus: validatebox(status).error
          });
          val = false;
        } 
        else {

          this.tagger();
          //<Link to={"/tag"}><RaisedButton  secondary={true} label="Parse"/></Link>
          console.log(status);
          //this.cleartext();
          this.setState({
            statusText: ''
           });
        }
            //this.clearText();
      };

      renderTag = (data,i) => {
        return (
          <div key={i}>
            <Chip key={i} style={tagstyles.tag} data-tip={data.tag} backgroundColor={data.color}>{data.word}</Chip>
            <ReactTooltip place="bottom" type="dark" effect="float"/>
          </div>
        );
      };

      cleartext = () =>{
        document.getElementById('MesageBox').value = '';
      };

      EnterKey = (e) =>{
        if (e.key === 'Enter') {
            this.parse();
          }
      };

      render(){
        return(
          <div>
            <Paper className="row" style={style} zDepth={1}>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <TextField fullWidth={true} style={textfieldstyle} errorText={this.state.textStatus} ref="textinput" id="MesageBox" onKeyPress={this.EnterKey} multiLine={true} rows={1} rowsMax={6} hintText="Please enter a sentence to be parsed..."/>
              </div>
            <div className="col-xs-9 col-sm-9 col-md-9"/>
            <div className="col-xs-3 col-sm-3 col-md-3">
              <RaisedButton  secondary={true} label="Parse" onTouchTap={this.parse}/>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1"/>
            </Paper>
            <div style={tagstyles.wrapper}>
              {this.state.tags.map(this.renderTag, this)}
            </div>
            <br/>
            <br/>
            <ParserTagBox style={style}/>
          </div>
        );
      }

}

export default PaserBox;
