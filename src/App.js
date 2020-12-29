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
      author: "David J. Griffiths",
      title: "Introduction to electrodynamics",
      image: "./images/griffithsed.jpeg",
      unitPrice: 48.92,
      numberPurchased: 0,
    },
    {
      id: 3,
      author: "David J. Griffiths",
      title: "Introduction to quantum mechanics",
      image: "./images/griffithsqm.jpeg",
      unitPrice: 48.92,
      numberPurchased: 0,
    },
    {
      id: 0,
      author: "Richard Feynman",
      title: "The Feynman lectures on physics",
      image: "./images/feynman.jpeg",
      unitPrice: 111.99,
      numberPurchased: 0,
    },
    {
      id: 0,
      author: "Richard Feynman",
      title: "The Feynman lectures on physics",
      image: "./images/feynman.jpeg",
      unitPrice: 111.99,
      numberPurchased: 0,
    },
    {
      id: 0,
      author: "Richard Feynman",
      title: "The Feynman lectures on physics",
      image: "./images/feynman.jpeg",
      unitPrice: 111.99,
      numberPurchased: 0,
    },
    {
      id: 0,
      author: "Richard Feynman",
      title: "The Feynman lectures on physics",
      image: "./images/feynman.jpeg",
      unitPrice: 111.99,
      numberPurchased: 0,
    },
  ];

  return (
    <BrowserRouter>
      <TitleBar cartItemsCount="9" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/shopping"
          exact
          render={() => <Shopping items={physicBooks} />}
        />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
