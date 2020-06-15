import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Menu from './components/menu';
import Header from './components/header';

class App extends Component {
    
    render() {
        const theme = createMuiTheme();
        
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <div className="App">
                        <Header />
                        <Route exact path="/" component={Menu}/>
                        {/*<Route path="/students" component={StudentsList}/>*/}
                        {/*<Route path="/teacher" component={Teacher}/>*/}
                        {/*<Route path="/test-builder" component={TestBuilder}/>*/}
                        {/*<Route path="/student-page" component={StudentPage}/>*/}
                        {/*<Route path="/lesson-builder" component={LessonBuilder}/>*/}
                        {/*<Footer />*/}
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        )
    }
}

export default App;
