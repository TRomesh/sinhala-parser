import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppRoutes }  from "./components/approutes";

injectTapEventPlugin();

class App extends React.Component{

      render(){
        return(
        <MuiThemeProvider>
            <AppRoutes/>
        </MuiThemeProvider>
        );
      }

}

render(<App/>,document.getElementById('app'));
