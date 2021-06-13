import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";

function App() {

  const logoutButton =(event) => {
    event.stopPropagation();
    if (localStorage.getItem('token')){
      localStorage.removeItem('token');
      window.location.href = "/"
    }
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={logoutButton} >logout</a>
        </header> 

        <Route exact path="/" component={Login} />

        <Route exact path="/bubbles" component={PrivateRoute} />

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.