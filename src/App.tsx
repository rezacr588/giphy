import React, { Dispatch, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./Config/routes";
import InitialState from "./StateManagement/States/InitialState";
import MainReducer from "./StateManagement/Reducers/Reducer";
import { State } from "./StateManagement/Interfaces/State.interface";
import { Actions } from "./StateManagement/Reducers/Reducer";
export const StateContext = React.createContext<State>(InitialState);
export const ReducerContext = React.createContext<Dispatch<Actions>>(
  () => null,
);
export default function App() {
  const [state, dispatch] = useReducer(MainReducer, InitialState);
  return (
    <ReducerContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </StateContext.Provider>
    </ReducerContext.Provider>
  );
}
