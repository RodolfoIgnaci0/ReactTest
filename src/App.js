import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PhotosContextProvider from "./contexts/PhotosContext";
import Photos from "./components/Photos";
import NotFound from "./components/NotFound";
import "./assets/css/styles.css"

import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";


const App = () => (
  <BrowserRouter>
    <Header />
    <Switch >
      <Route exact path="/">
        <PhotosContextProvider>
          <Photos />
        </PhotosContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App;
