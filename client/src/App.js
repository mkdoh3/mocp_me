import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
// Normalizes CSS defaults in varying browsers
import { Normalize } from "normalize-css";

import Landing from "./pages/landing/landing";
import ExploreSearch from "./pages/explore_search/explore_search";
import SearchResultsDesktop from "./pages/search_results_desktop/search_results_desktop";
import VisionResultsDesktop from "./pages/vision_results_desktop/vision_results_desktop";
import Submit from "./pages/submit/submit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  render() {
    return (
      <div style={Normalize}>
        <Router>
          <Switch>
            <Route path="/search/:term" component={SearchResultsDesktop} />
            <Route path="/vision_search" component={VisionResultsDesktop} />
            <Route path="/submit" component={Submit} />
            <Route path="/explore" component={ExploreSearch} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
