import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Shopping from "./components/shopping";
import Cart from "./components/cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitleBar from "./components/titlebar";
import React, { useState } from "react";

function App() {
  const physicBooks = [
    {
      id: 0,
      author: "Mary L. Boas",
      title: "Mathematical methodes for the physical sciences",
      image: "./images/boas.jpeg",
      unitPrice: 65.0,
      numberPurchased: 0,
    },
    {
      id: 1,
      author: "Richard Feynman",
      title: "The Feynman lectures on physics",
      image: "./images/feynman.jpeg",
      unitPrice: 111.99,
      numberPurchased: 0,
    },
    {
      id: 2,
      author: "John R. Taylor",
      title: "Classical Mechanics",
      image: "./images/taylor.jpeg",
      unitPrice: 61.99,
      numberPurchased: 0,
    },
    {
      id: 3,
      author: "David J. Griffiths",
      title: "Introduction to electrodynamics",
      image: "./images/griffithsed.jpeg",
      unitPrice: 48.92,
      numberPurchased: 0,
    },
    {
      id: 4,
      author: "David J. Griffiths",
      title: "Introduction to quantum mechanics",
      image: "./images/griffithsqm.jpeg",
      unitPrice: 48.92,
      numberPurchased: 0,
    },
    {
      id: 0,
      author: "David J. Griffiths",
      title: "Introduction to elementary particles",
      image: "./images/griffithsiep.jpeg",
      unitPrice: 55.01,
      numberPurchased: 0,
    },
    {
      id: 0,
      author: "Frederich Reif",
      title: "Fundamentals of statistical and thermal physics",
      image: "./images/reif.jpeg",
      unitPrice: 57.89,
      numberPurchased: 0,
    },
    {
      id: 0,
      author: "Robert J. A. Lambourne",
      title: "Relativity, Gravitation and Cosmology",
      image: "./images/lambourne.jpeg",
      unitPrice: 47.31,
      numberPurchased: 0,
    },
    {
      id: 0,
      author: "Robert D. Klauber",
      title: "Student friendly quantum field theory",
      image: "./images/klauber.jpeg",
      unitPrice: 62.97,
      numberPurchased: 0,
    },
  ];

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

  function itemsInCart() {
    let counter = 0;
    state.forEach((item) => {
      if (item.numberPurchased > 0) {
        counter += item.numberPurchased;
      }
    });
    return counter;
  }

  function buttonText(id) {
    if (state[id].numberPurchased > 0) {
      return "Remove";
    } else {
      return "Buy Me!";
    }
  }

  return (
    <BrowserRouter>
      <TitleBar cartItemsCount={itemsInCart()} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/shopping"
          exact
          render={() => (
            <Shopping
              items={physicBooks}
              onButtonClick={(id, numberPurchased) =>
                handleClick(id, numberPurchased)
              }
              buttonText={(id) => buttonText(id)}
            />
          )}
        />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
