import { useState } from "react";

import Header from "./common/header/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashdeals/Data";

function App() {
  // Step 1: Fetch data from db
  const { productItems } = Data;

  const [cartItem, setCardItem] = useState([]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
