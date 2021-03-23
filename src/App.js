import Header from "components/Header";
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
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route path="/products" component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
