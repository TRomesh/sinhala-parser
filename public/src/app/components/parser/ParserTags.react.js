import React from 'react';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {deepPurpleA100,pinkA200,orangeA400,indigo400,greenA400,lightGreenA400,yellowA200,brown300,lightBlue400
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
  textAlign: 'center'
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
          	<div style={style}>
          		<Chip backgroundColor={indigo400} data-tip="Namapadha" onTouchTap={handleTouchTap} style={styles.chip}>
	                නාම පද
	            </Chip>
	            <ReactTooltip place="bottom" type="dark" effect="float"/>
	            <Chip backgroundColor={pinkA200} onTouchTap={handleTouchTap} style={styles.chip}>
	                ක්‍රියා පද
	            </Chip>
	            <Chip backgroundColor={orangeA400} onTouchTap={handleTouchTap} style={styles.chip}>
	                නාම විශේෂණ
	            </Chip>
	            <Chip backgroundColor={lightBlue400} onTouchTap={handleTouchTap} style={styles.chip}>
	                ක්‍රියා විශේෂණ
	            </Chip>
	            <Chip backgroundColor={yellowA200} onTouchTap={handleTouchTap} style={styles.chip}>
	                නිපාත
	            </Chip>
	            <Chip backgroundColor={lightGreenA400} onTouchTap={handleTouchTap} style={styles.chip}>
	                කෘදන්ත
	            </Chip>
	            <Chip backgroundColor={deepPurpleA100} onTouchTap={handleTouchTap} style={styles.chip}>
	                උපසර්ග
	            </Chip>
	            <Chip backgroundColor={brown300} onTouchTap={handleTouchTap} style={styles.chip}>
	                මිෂ ක්‍රියා
	            </Chip>
          	</div>
          </div>
        );
    }

}

export default ParserTags;
