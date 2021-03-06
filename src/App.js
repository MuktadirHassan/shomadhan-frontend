import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/AuthContext";
import Bgwrapper from "./components/Bgwrapper";
import Blogpage from "./components/Blogpage";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PostArticle from "./components/PostArticle";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Register from "./components/Register";
function App() {
  return (
    <AuthProvider>
      <Bgwrapper>
        <Router>
          <Navbar />
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/post-article">
              <PostArticle />
            </PrivateRoute>
            <Route path="/blog/:id">
              <Blogpage />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </Bgwrapper>
    </AuthProvider>
  );
}

export default App;
