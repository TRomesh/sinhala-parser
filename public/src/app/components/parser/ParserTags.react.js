import React from 'react';
import Chip from 'material-ui/Chip';
import Badge from 'material-ui/Badge';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blueA400, indigoA400,pinkA400,redA400,purpleA400,deepPurpleA400,lightBlueA400,
  cyanA400,tealA400,greenA400,lightGreenA400,limeA400,yellowA200,amberA400,orangeA400,
  deepOrangeA400,brown500,blueGrey500,grey500
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
          <div className="col-lg-10">
            <div>
              <Chip backgroundColor={blueA400} data-tip="Namapadha" onTouchTap={handleTouchTap} style={styles.chip}>
                Namapadha
              </Chip>
              <ReactTooltip place="bottom" type="dark" effect="float"/>
              <Chip backgroundColor={pinkA400} onTouchTap={handleTouchTap} style={styles.chip}>
                Kriyapadha
              </Chip>
              <Chip backgroundColor={grey500} onTouchTap={handleTouchTap} style={styles.chip}>
                Namavisheshana
              </Chip>
              <Chip backgroundColor={deepPurpleA400} onTouchTap={handleTouchTap} style={styles.chip}>
                Kriyavisheshana
              </Chip>
              <Chip backgroundColor={cyanA400} onTouchTap={handleTouchTap} style={styles.chip}>
                Nipatha
              </Chip>
              <Chip backgroundColor={lightGreenA400} onTouchTap={handleTouchTap} style={styles.chip}>
                Krudhantha
              </Chip>
              <Chip backgroundColor={yellowA200} onTouchTap={handleTouchTap} style={styles.chip}>
                Upasarga
              </Chip>
              <Chip backgroundColor={brown500} onTouchTap={handleTouchTap} style={styles.chip}>
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
