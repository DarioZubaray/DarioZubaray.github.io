import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { BlogScreen } from '../components/portfolio/BlogScreen';
import { GithubScreen } from '../components/portfolio/GithubScreen';
import { HomeScreen } from '../components/portfolio/HomeScreen';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { StudiesScreen } from '../components/portfolio/StudiesScreen';
import { LinksScreen } from '../components/portfolio/LinksScreen'
import { DemoScreen } from '../components/portfolio/DemoScreen';
import { ConversorScreen } from '../components/portfolio/ConversorScreen';
import TypeMatchupScreen from '../components/portfolio/TypeMatchupScreen';

export const AppRouter = () => {

  NProgress.start();
  useEffect(() => {
      const timer = setTimeout(() => {
          NProgress.done();
      }, 250);
      return () => {
        clearTimeout(timer)
      }
  });

  return (
    <Router>
      <div id="page-container">
        <div id="content-wrap">
          <Navbar />
          <div className="container mt-2">
            <Switch>
              <Route path="/studies">
                <StudiesScreen />
              </Route>
              <Route path="/blog">
                <BlogScreen />
              </Route>
              <Route path="/links">
                <LinksScreen />
              </Route>
              <Route path="/demo">
                <DemoScreen />
              </Route>
              <Route path="/github">
                <GithubScreen />
              </Route>
              <Route path="/conversor">
                <ConversorScreen />
              </Route>
              <Route path="/type-matchup">
                <TypeMatchupScreen />
              </Route>
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
};
