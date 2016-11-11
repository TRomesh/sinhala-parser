import React from 'react';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {deepPurpleA100,pinkA200,orangeA400,indigo400,greenA400,lightGreenA400,yellowA200,brown300,lightBlue400,lightGreenA200
} from 'material-ui/styles/colors';
import ReactTooltip from 'react-tooltip';
import Paper from 'material-ui/Paper';
import PTagBox from './PTagBox.react';

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

const style = {
  height: 650,
  width: 250,
  margin: 50,
  display: 'inline-block',
  padding: 10,
  textAlign: 'center',
};


const handleTouchTap = () =>{
    alert('You clicked the Chip.');
};

class ParserTags extends React.Component{

  constructor(props) {
    super(props);
      this.state = {

    }
	}

  render(){
    return(
      <div>
        <div style={style}>
          <Chip backgroundColor={indigo400} data-tip="නාම පද (Noun)" onTouchTap={handleTouchTap} style={styles.chip}>
	           නාම පද
	        </Chip>
	        <ReactTooltip place="bottom" type="dark" effect="float"/>
	        <Chip backgroundColor={pinkA200} data-tip="ක්‍රියා පද (Verb)" onTouchTap={handleTouchTap} style={styles.chip}>
	           ක්‍රියා පද
	        </Chip>
	        <Chip backgroundColor={orangeA400} data-tip="නාම විශේෂණ (Adjective)" onTouchTap={handleTouchTap} style={styles.chip}>
	          නාම විශේෂණ
	        </Chip>
	        <Chip backgroundColor={lightBlue400} data-tip="ක්‍රියා විශේෂණ (Adverb)" onTouchTap={handleTouchTap} style={styles.chip}>
	          ක්‍රියා විශේෂණ
	        </Chip>
	        <Chip backgroundColor={yellowA200} data-tip="නිපාත (Nipatha)" onTouchTap={handleTouchTap} style={styles.chip}>
	          නිපාත
	        </Chip>
	        <Chip backgroundColor={lightGreenA400} data-tip="කෘදන්ත (Krudhantha)" onTouchTap={handleTouchTap} style={styles.chip}>
	          කෘදන්ත
	        </Chip>
	        <Chip backgroundColor={deepPurpleA100} data-tip="උපසර්ග (Upasarga)" onTouchTap={handleTouchTap} style={styles.chip}>
	          උපසර්ග
	        </Chip>
	        <Chip backgroundColor={brown300} data-tip="මිශ්‍ර ක්‍රියා (Mishrakkriya)" onTouchTap={handleTouchTap} style={styles.chip}>
	          මිශ්‍ර ක්‍රියා
	        </Chip>
          <Chip backgroundColor={lightGreenA200} data-tip="සමාස (Mishrakkriya)" onTouchTap={handleTouchTap} style={styles.chip}>
            සමාස
          </Chip>
        </div>
      </div>
    );
  }
}

export default ParserTags;
