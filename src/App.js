import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Shopping from "./components/shopping";
import Cart from "./components/cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitleBar from "./components/titlebar";

function App() {
  return (
    <BrowserRouter>
      <TitleBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shopping" exact component={Shopping} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
