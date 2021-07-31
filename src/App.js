import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Bgwrapper from "./components/Bgwrapper";
import Blogpage from "./components/Blogpage";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Bgwrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/blog">
            <Blogpage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </Bgwrapper>
  );
}

export default App;
