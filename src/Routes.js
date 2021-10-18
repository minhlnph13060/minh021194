import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Product from "./Product";
import Add from "./Add";
import Edit from "./Edit";
import Singin from "./pages.js/Singin";
import Singup from "./pages.js/Singup";
import Banner from "./Banner";

const Routes = (props) => {
  return (
    <Router>
      <nav className="nav nav-pills flex-column flex-sm-row">
        <NavLink
          className="flex-sm-fill text-sm-center nav-link active"
          aria-current="page"
          to="/"
        >
          Home Page
        </NavLink>
        <NavLink className="flex-sm-fill text-sm-center nav-link" to="/product">
          Introduce
        </NavLink>
        <NavLink className="flex-sm-fill text-sm-center nav-link" to="/add">
          Add products
        </NavLink>
        <NavLink className="flex-sm-fill text-sm-center nav-link" to="/singup">
          Đăng ký
        </NavLink>
        <NavLink className="flex-sm-fill text-sm-center nav-link" to="/singin">
          Đăng nhập
        </NavLink>
      </nav>

      <Switch>
        <Route path="/" exact>
          <Banner />
        </Route>
        <Route path="/product" exact>
          <Product {...props} />
        </Route>
        <Route path="/add">
          <Add {...props} />
        </Route>
        <Route path="/product/:id/edit" exact>
          <Edit {...props} />
        </Route>
        <Route path="/singup">
          <Singup />
        </Route>
        <Route path="/Singin">
          <Singin />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
