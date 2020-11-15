import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
// import ColorBox from './components/ColorBox';
// import Counter from './components/Counter';
import AlbumFeature from "./features/Album";
// import './App.css';
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      {/* <ColorBox /> */}
      {/* <Counter /> */}
      Footer
    </div>
  );
}

export default App;
