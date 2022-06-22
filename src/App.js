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

  const addToCard = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) => {
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item;
        })
      );
    }
  };

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
