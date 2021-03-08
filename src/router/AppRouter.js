import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BlogScreen } from "../components/portfolio/BlogScreen";
import { GithubScreen } from "../components/portfolio/GithubScreen";
import { HomeScreen } from "../components/portfolio/HomeScreen";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <div className="container">
          <Switch>
            <Route path="/blog">
              <BlogScreen />
            </Route>
            <Route path="/github">
              <GithubScreen />
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
