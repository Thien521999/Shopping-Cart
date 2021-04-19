import Header from "components/Header";
import CartFeature from "features/Cart";
import ProductFeature from "features/Products";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />

        <Route path="/" component={ProductFeature} exact />
        <Route path="/todos" component={TodoFeature} exact/>
        <Route path="/albums" component={AlbumFeature} />

        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
