//import { Button } from "@material-ui/core";
import productApi from "api/productApi";
import Header from "components/Header";
import ProductFeature from "features/Products";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
// import './App.css';
import TodoFeature from "./features/Todo";

function App() {
  // const { enqueueSnackbar } = useSnackbar();

  // useEffect(() => {
  //   //goi Api
  //   const fecthProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     };
  //     const productList = await productApi.getAll(params); //lay du lieu cua product(chi lay 10 thang)
  //     console.log(productList);
  //   };
  //   fecthProducts();
  // }, []);

  // const showNoti = () => {
  //   enqueueSnackbar("Register successfully!", { variant: "success" });
  // };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const params = {
          _limit: 10,
        };
        const productList = await productApi.getAll(params);
        console.log(productList);
      } catch (error) {
        console.log("Failed to fecth product list");
      }
    };
    fetchProduct();
  }, []);

  //if fee
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const params = {
  //         _limit: 20,
  //       };
  //       const productList = await productApi.getAll(params);
  //       console.log(productList);
  //     } catch (error) {
  //       console.log("Failed to fetch product list");
  //     }
  //   })();
  // }, []);

  return (
    <div className="App">
      <Header />

      {/* <Button onClick={showNoti}>Show Noti</Button> */}
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />

        {/* <Route path="/" component={CounterFeature} exact /> */}
        <Route path="/" component={ProductFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route path="/products" component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
      {/* <ColorBox /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
