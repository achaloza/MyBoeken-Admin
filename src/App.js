import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import routes from "./routes";
import withTracker from "./withTracker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.scss";
import store from "./store/index";
import { Redirect } from "react-router-dom";

export default () => (

  <Provider store={store}>
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {/* achal */}
        {
          routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })
        }

      </div>
    </Router></Provider>
);
