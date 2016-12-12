import React from 'react';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue200,pink300,deepOrangeA100,deepPurpleA100,lightGreenA200,amberA100,teal200,brown200,blueGrey100
} from 'material-ui/styles/colors';
import ReactTooltip from 'react-tooltip';
import Paper from 'material-ui/Paper';

const styles = {
  chip: {
    margin: 2,
    width: 110,
    borderRadius: 6,
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
          <Chip backgroundColor={blue200} data-tip="නාම පද (Noun)"  style={styles.chip}>
	           නාම පද
	        </Chip>
	        <ReactTooltip place="bottom" type="dark" effect="float"/>
	        <Chip backgroundColor={pink300} data-tip="ක්‍රියා පද (Verb)"  style={styles.chip}>
	           ක්‍රියා පද
	        </Chip>
	        <Chip backgroundColor={deepOrangeA100} data-tip="නාම විශේෂණ (Adjective)"  style={styles.chip}>
	          නාම විශේෂණ
	        </Chip>
	        <Chip backgroundColor={deepPurpleA100} data-tip="ක්‍රියා විශේෂණ (Adverb)"  style={styles.chip}>
	          ක්‍රියා විශේෂණ
	        </Chip>
	        <Chip backgroundColor={lightGreenA200} data-tip="නිපාත (Nipatha)"  style={styles.chip}>
	          නිපාත
	        </Chip>
	        <Chip backgroundColor={amberA100} data-tip="කෘදන්ත (Krudhantha)"  style={styles.chip}>
	          කෘදන්ත
	        </Chip>
	        <Chip backgroundColor={teal200} data-tip="උපසර්ග (Upasarga)"  style={styles.chip}>
	          උපසර්ග
	        </Chip>
	        <Chip backgroundColor={brown200} data-tip="මිශ්‍ර ක්‍රියා (Mishrakkriya)"  style={styles.chip}>
	          මිශ්‍ර ක්‍රියා
	        </Chip>
          <Chip backgroundColor={blueGrey100} data-tip="සමාස (Samasa)"  style={styles.chip}>
            සමාස
          </Chip>
        </div>
      </div>
    );
  }
}

export default ParserTags;
