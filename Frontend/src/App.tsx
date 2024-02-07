import Organzier from "./pages/Organzier";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/log-in" Component={Login} />
          <Route path="/sign-up" Component={Signup} />
          <Route path="/organizer" Component={Organzier} />
          <Route Component={PrivateRoute}>
            <Route path="/profile" Component={Profile} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
