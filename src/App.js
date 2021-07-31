import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import * as comps from "./containers";

function App() {
  return (
    <Router>
      <Switch>
        {Object.entries(comps).map(([key, Comp]) => {
          return (
            <Route key={key} path={`/${key}`} component={Comp} />
          );
        })}
        <Redirect to="/user" />
      </Switch>
    </Router>
  );
}

export default App;
