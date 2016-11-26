import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import {deepPurpleA100,pinkA200,orangeA400,indigo400,greenA400,lightGreenA400,yellowA200,brown300,
  lightBlue400,blueA400,blueA300, indigoA400,pinkA400,redA400,purpleA400,deepPurpleA400,lightBlueA400,
  cyanA400,tealA400,limeA400,amberA400,deepOrangeA400,brown500,blueGrey500,grey500
} from 'material-ui/styles/colors';
import Chip from 'material-ui/Chip';
import ReactTooltip from 'react-tooltip';
import Actions from '../../Actions/Actions';
import Store from '../../Store/Store';
import ParserTreeBox from'./ParserTreeBox.react';
import ParserTags from './ParserTags.react';

const style = {
  height: 120,
  marginTop: 50,
  marginBottom: 50,
  display: 'inline-block',
  padding: 10
};

const textfieldstyle = {
  marginLeft: 20,
  marginRight: 20,
  marginBottom: 5,
};

const validatebox = (textStatus) => {

    if (textStatus.length > 100) {
      return {
              error: '*sentence is too long',
            };
    } else if (textStatus === '') {
      return {
              error: '*sentence cannot be empty',
            };
    } else {

        var i;
        for(i=0; i < textStatus.length; i++){
          var res = textStatus.charCodeAt(i);

          if(!(res >= 3458 && res <= 3572)) {
            if(res != 32) {
              return {
                error: '*cannot enter invalid characters',
              }
            }
          } 
        }
        return true;
    }
}

class PaserBox extends React.Component{

  constructor(props) {
      super(props);
        this.state = {
          textStatus: '',
          taggedData:{},
          showResults: false
        };

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

  parse = () => {

    let status = this.refs.textinput.getValue();

    if(validatebox(status).error) {
      this.setState({
        textStatus: validatebox(status).error
      });
      return;
    }
    else {

      Actions.SendDataToTag(status);
      this.setState({ showResults: true });
      console.log(status);
      this.setState({
          textStatus: ''
      });

    }
          //this.clearText();
  };

/*  clearText = () => {
    document.getElementById('language').value = '';
  };*/

  handleKey = (e) =>{
    if (e.key === 'Enter') {
        this.parse();
    }
    else {
      this.setState({
          textStatus: ''
      });
    }
  };

  handleKeyDown = (e) => {
    if (e.keyCode == 8) {
        /*this.setState({
            textStatus: ''
        });*/
    }
  };

  reset = () => {
    document.getElementById('language').value = '';
    this.setState({ showResults: false });
  };

  render(){
    return(
      <div>
        <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1" />
          <Paper className="row col-md-10 col-sm-10 col-xs-10 col-lg-10" style={style} zDepth={1}>
            <div style={textfieldstyle}>
              <TextField
                  fullWidth={true}
                  errorText={this.state.textStatus}
                  ref="textinput"
                  onKeyPress={this.handleKey}
                  onKeyDown={this.handleKeyDown}
                  hintText="Please enter a meaningful sentence..."
                  name="ta"
                  id="language"/>
            </div>
            {
              this.state.showResults ? <RaisedButton 
                                          style={{float:'Right', marginRight: 10}} 
                                          className="col-md-3-offset col-sm-3-offset col-xs-3-offset col-lg-3-offset" 
                                          primary={true} 
                                          label="Reset" 
                                          onTouchTap={this.reset}/>

                                      : <RaisedButton 
                                            style={{float:'Right', marginRight: 10}} 
                                            className="col-md-3-offset col-sm-3-offset col-xs-3-offset col-lg-3-offset" 
                                            secondary={true} 
                                            label="Parse" 
                                            onTouchTap={this.parse}/>
            }
          </Paper>
        <div className="col-md-1 col-sm-1 col-xs-1 col-lg-1" />
        <br/>
        { this.state.showResults ?  <div>
                                      <div className="col-md-10 col-sm-10 col-xs-10 col-lg-10">
                                        <ParserTreeBox taggedData={this.state.taggedData}/>
                                      </div>
                                      <div className="col-md-2 col-sm-2 col-xs-2 col-lg-2">
                                        <ParserTags/>
                                      </div>
                                    </div> : null 
        }
      </div>
    );
  }

}

export default PaserBox;
