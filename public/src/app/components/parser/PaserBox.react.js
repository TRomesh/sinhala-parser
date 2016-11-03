import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 120,
  width: 650,
  margin: 50,
  textAlign: 'center',
  display: 'inline-block',
  padding: 10
};

const textfieldstyle = {
    marginBottom:10
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
       this.state = {}

      }

      parse = () =>{
        let sentence = this.refs.textinput.getValue();
        console.log(sentence);
        this.cleartext();
      }

      cleartext = () =>{
        document.getElementById('MesageBox').value = '';
      }

      EnterKey = (e) =>{
        if (e.key === 'Enter') {
            this.parse();
          }
      }



      render(){
        return(
          <div className="col-lg-6">
             <Paper className="row" style={style} zDepth={1}>
              <div className="col-xs-12 col-sm-12 col-md-12">
                <TextField fullWidth={true} style={textfieldstyle} ref="textinput" id="MesageBox" onKeyPress={this.EnterKey} multiLine={true} rows={1} rowsMax={6} hintText="Please enter a sentence to be parsed..."/>
              </div>
             <div className="col-xs-9 col-sm-9 col-md-9"/>
             <div className="col-xs-3 col-sm-3 col-md-3">
              <RaisedButton secondary={true} label="Parse" onTouchTap={this.parse} />
             </div>
             <div className="col-xs-1 col-sm-1 col-md-1"/>
             </Paper>
          </div>
        );
      }

}

export default PaserBox;
