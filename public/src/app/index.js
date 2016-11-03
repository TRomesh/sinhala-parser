import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavigationBar from './components/navigation/NavigationBar.react';

injectTapEventPlugin();


class App extends React.Component{

      render(){
        return(
          <MuiThemeProvider>
             <NavigationBar/>
          </MuiThemeProvider>
        );
      }

}

render(<App/>,document.getElementById('app'));
