import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CityModal from "./components/CityModal";
// import pages
import Home from "./pages/Home";
import Cities from "./pages/Cities";

// import header
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <CityModal></CityModal>
        <div className="ml-32 mr-16 pb-16 max-w-screen-xl">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cities">
              <Cities />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
