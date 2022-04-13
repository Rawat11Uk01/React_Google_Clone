import Home from "./pages/Home";
import "./App.css";

import { Switch, Route } from "react-router-dom";
function App() {
  return (
  
    <Switch>
      <Route path='/search'>
        <h1>This is a search page</h1>
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
 
  );
}

export default App;
