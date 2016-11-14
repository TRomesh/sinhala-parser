import React from 'react';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {deepPurpleA100,pinkA100,orangeA100,indigo100,greenA100,lightGreenA100,yellowA100,brown100,lightBlue100,blueA100,red100
} from 'material-ui/styles/colors';
import ReactTooltip from 'react-tooltip';
import Paper from 'material-ui/Paper';

const styles = {
  chip: {
    margin: 2,
    width: 110
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const style = {
  display: 'inline-block',
  paddingTop: 10,
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
          <Chip backgroundColor={indigo100} data-tip="නාම පද (Noun)" onTouchTap={handleTouchTap} style={styles.chip}>
	           නාම පද
	        </Chip>
	        <ReactTooltip place="bottom" type="dark" effect="float"/>
	        <Chip backgroundColor={pinkA100} data-tip="ක්‍රියා පද (Verb)" onTouchTap={handleTouchTap} style={styles.chip}>
	           ක්‍රියා පද
	        </Chip>
	        <Chip backgroundColor={orangeA100} data-tip="නාම විශේෂණ (Adjective)" onTouchTap={handleTouchTap} style={styles.chip}>
	          නාම විශේෂණ
	        </Chip>
	        <Chip backgroundColor={lightBlue100} data-tip="ක්‍රියා විශේෂණ (Adverb)" onTouchTap={handleTouchTap} style={styles.chip}>
	          ක්‍රියා විශේෂණ
	        </Chip>
	        <Chip backgroundColor={yellowA100} data-tip="නිපාත (Nipatha)" onTouchTap={handleTouchTap} style={styles.chip}>
	          නිපාත
	        </Chip>
	        <Chip backgroundColor={lightGreenA100} data-tip="කෘදන්ත (Krudhantha)" onTouchTap={handleTouchTap} style={styles.chip}>
	          කෘදන්ත
	        </Chip>
	        <Chip backgroundColor={deepPurpleA100} data-tip="උපසර්ග (Upasarga)" onTouchTap={handleTouchTap} style={styles.chip}>
	          උපසර්ග
	        </Chip>
	        <Chip backgroundColor={brown100} data-tip="මිශ්‍ර ක්‍රියා (Mishrakkriya)" onTouchTap={handleTouchTap} style={styles.chip}>
	          මිශ්‍ර ක්‍රියා
	        </Chip>
          <Chip backgroundColor={red100} data-tip="සමාස (Samasa)" onTouchTap={handleTouchTap} style={styles.chip}>
            සමාස
          </Chip>
        </div>
      </div>
    );
  }
}

export default ParserTags;
