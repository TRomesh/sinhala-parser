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
  width: 1170,
  marginLeft: 50,
  marginTop: 50,
  display: 'inline-block',
  padding: 10
};

const styles = {
  marginLeft: 50,
  marginTop: 10,
  marginBottom: 50
};

const style_button = {
    marginLeft:1010
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
              tags:{},
              showResults: false
            };

      }

      componentWillMount(){
        Store.addChangeListener(this._onChange);
      }

      componentWillUnmount(){
        Store.removeChangeListener(this._onChange);
      }

      _onChange(){
         //this.setState({textStatus:Store.getClearTextFieldMsg()});
      }

      parse = () => {
        //let val = true;
        let status = this.refs.textinput.getValue();

        if(validatebox(status).error) {
          this.setState({
            textStatus: validatebox(status).error
          });
          return;
          //val = false;
        }
        else {

          Actions.SendDataToTag(status);
          this.setState({ showResults: true });
          console.log(status);
          //this.setState({textStatus: ''});

        }
          this.clearText();
      };

      clearText = () => {
        this.refs.textinput.value= '';
        //document.getElementById('MesageBox').value = '';
      };

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

      render(){
        return(
          <div>
            <Paper className="row col-xs-12 col-sm-12 col-md-12" style={style} zDepth={1}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TextField
                  fullWidth={true}
                  style={textfieldstyle}
                  errorText={this.state.textStatus}
                  ref="textinput"
                  id="MesageBox"
                  onKeyPress={this.handleKey}
                  hintText="සම්පුර්ණ වාක්‍යයක් ඇතුල් කරන්න ..."
                  className="col-xs-12 col-sm-12 col-md-12"
                  name="ta"
                  id="language"/>
              </div>
            <div className="col-xs-9 col-sm-9 col-md-9"/>
            <div className="col-xs-3 col-sm-3 col-md-3" style={style_button}>
              <RaisedButton  secondary={true} label="Parse" onTouchTap={this.parse}/>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1"/>
            </Paper>
            <label style={styles}>සැලකිය යුතුයි : මෙම ක්‍රියාවලිය නිවැරදිව ක්‍රියා කිරීමට නම් නිවැරදි ව්‍යාකරණ සහිත වාක්‍ය ඇතුල් කරන්න</label>
            <br/>
            { this.state.showResults ?  <div className="row">
                                          <div className="col-md-10">
                                            <ParserTreeBox/>
                                          </div>
                                          <div className="col-md-2">
                                            <ParserTags/>
                                          </div>
                                        </div> : null }
          </div>
        );
      }

}

export default PaserBox;
