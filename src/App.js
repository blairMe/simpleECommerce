import Header from './common/header/Header';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/">
            <About />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
