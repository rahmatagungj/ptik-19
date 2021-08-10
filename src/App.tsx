import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter basename="/">
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
