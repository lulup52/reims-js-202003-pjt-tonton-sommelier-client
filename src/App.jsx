import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './components/Home';
import Description from './components/Description';
import Box from './components/Box';
import Register from './components/Register';
import Login from './components/Login';
import Questions from './components/Questions';
import DebutJeu from './components/DebutJeu';
import PageScan from './components/PageScan';
import ChoixQuestion1 from './components/ChoixQuestion1';
import Reponse from './components/Reponse';
import SessionNamePage from './components/SessionName';
import Eyes from './components/Eyes';
import Nose from './components/Nose';
import Mouth from './components/Mouth';

class App extends React.Component {
  withAuth = (Component) => {
    const { token } = this.props;
    const RedirectToLogin = () => (<Redirect to="/login" />);
    return (token != null ? Component : RedirectToLogin);
  };

  render() {
    const { withAuth } = this;
    return (
      <div className="AppContent">
        <Router>
          <Switch>
            <Route path="/bouche" component={withAuth(Mouth)} />
            <Route path="/nez" component={withAuth(Nose)} />
            <Route path="/vue" component={withAuth(Eyes)} />
            <Route path="/reponse" component={withAuth(Reponse)} />
            <Route path="/questions" component={withAuth(Questions)} />
            <Route path="/home" component={withAuth(HomePage)} />
            <Route path="/boxes/:boxId" component={withAuth(Box)} />
            <Route path="/descriptions" component={withAuth(Description)} />
            <Route path="/register" component={Register} />
            <Route path="/debutjeu" component={withAuth(DebutJeu)} />
            <Route path="/sessionname" component={withAuth(SessionNamePage)} />
            <Route path="/login" component={Login} />
            <Route path="/scan" component={withAuth(PageScan)} />
            <Route path="/choixquestion1" component={withAuth(ChoixQuestion1)} />
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.reducer.token,
});
export default connect(mapStateToProps)(App);
