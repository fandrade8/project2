import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Login }  from './Login'
import { Register }  from './Register'
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';


export const AuthContext = React.createContext(null);

class App extends Component {
  render () {
    return (
      <React.Fragment>
      <NavigationBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;
