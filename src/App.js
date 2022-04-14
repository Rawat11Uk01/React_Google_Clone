import Home from "./pages/Home";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SearchPage from "./componets/SearchPage";
function App() {
  return (
    <Switch>
      <Route path="/search">
       <SearchPage />
      </Route>

      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
