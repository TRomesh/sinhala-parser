import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppRoutes }  from "./components/approutes";
import {blue900
,blue800,blue700,orangeA400,orangeA300,orangeA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

const customTheme = {
  palette: {
    primary1Color: blue700,
    primary2Color: blue800,
    primary3Color: blue700,
    accent1Color:orangeA400,
    accent2Color:orangeA300,
    accent3Color:orangeA200
  }
};

const theme = getMuiTheme(customTheme);

class App extends React.Component{

      render(){
        return(
        <MuiThemeProvider muiTheme={theme}>
            <AppRoutes/>
        </MuiThemeProvider>
        );
      }

}

render(<App/>,document.getElementById('app'));
