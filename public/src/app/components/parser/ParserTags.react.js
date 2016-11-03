import React from 'react';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {deepPurpleA100,pinkA200,orangeA400,indigo400,greenA400,lightGreenA400,yellowA200,brown300,lightBlue400
} from 'material-ui/styles/colors';
import ReactTooltip from 'react-tooltip';


const styles = {
  chip: {
    margin: 4,
    width: 200
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


const handleTouchTap = () =>{
    alert('You clicked the Chip.');
};

class ParserTags extends React.Component{

  	constructor(props) {
      	super(props);
      	this.state = {chipData: [
	        {tag: 0, word: 'Angular'},
	        {tag: 1, word: 'JQuery'},
	        {tag: 2, word: 'Polymer'},
	        {tag: 3, word: 'ReactJS'},
  		]}

	}

   	tagger = (taggedData) => {

  	}

    render(){
        return(
          <div>
            <div>
              <Chip backgroundColor={deepPurpleA100} data-tip="Namapadha" onTouchTap={handleTouchTap} style={styles.chip}>
                Namapadha
              </Chip>
              <ReactTooltip place="bottom" type="dark" effect="float"/>
              <Chip backgroundColor={pinkA200} onTouchTap={handleTouchTap} style={styles.chip}>
                Kriyapadha
              </Chip>
              <Chip backgroundColor={orangeA400} onTouchTap={handleTouchTap} style={styles.chip}>
                Namavisheshana
              </Chip>
              <Chip backgroundColor={lightBlue400} onTouchTap={handleTouchTap} style={styles.chip}>
                Kriyavisheshana
              </Chip>
              <Chip backgroundColor={yellowA200} onTouchTap={handleTouchTap} style={styles.chip}>
                Nipatha
              </Chip>
              <Chip backgroundColor={lightGreenA400} onTouchTap={handleTouchTap} style={styles.chip}>
                Krudhantha
              </Chip>
              <Chip backgroundColor={indigo400} onTouchTap={handleTouchTap} style={styles.chip}>
                Upasarga
              </Chip>
              <Chip backgroundColor={brown300} onTouchTap={handleTouchTap} style={styles.chip}>
                Mishrakkriya
              </Chip>
            </div>
            <br/>
            <Link to={"/tag"} ><RaisedButton secondary={true} label="tag"/></Link>
          </div>
        );
    }

}

export default ParserTags;