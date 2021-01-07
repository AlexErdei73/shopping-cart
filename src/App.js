import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Shopping from "./components/shopping";
import Cart from "./components/cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitleBar from "./components/titlebar";
import React, { useState } from "react";
import { physicBooks, itemsInCart, buttonText } from "./helper";

function App() {
  const [state, setState] = useState(physicBooks);

  const handleClick = (id, numberPurchased) => {
    const newState = [...state];
    const newBook = { ...newState[id] };
    if (newBook.numberPurchased > 0) {
      newBook.numberPurchased = 0;
    } else {
      if (!numberPurchased) return;
      newBook.numberPurchased = numberPurchased;
    }
    newState[id] = newBook;
    setState(newState);
  };

  return (
    <BrowserRouter>
      <TitleBar cartItemsCount={itemsInCart(state)} />
      <Switch>
        <Route
          path="/shopping"
          exact
          render={() => (
            <Shopping
              items={physicBooks}
              onButtonClick={(id, numberPurchased) =>
                handleClick(id, numberPurchased)
              }
              buttonText={(id) => buttonText(id, state)}
            />
          )}
        />
        <Route path="/cart" exact render={() => <Cart items={state} />} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
