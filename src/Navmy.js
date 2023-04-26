import React from "react";
import "./styles.css";
import Home from "./Home";
import VIew from "./VIew";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Account from "./Account";
import ChartMy from "./ChartMy";
import Edit from "./Edit";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Navmy() {
  return (
    <Router>
      <div className="hello">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            Simple Crud App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/account">
                Add User
              </Nav.Link>
              <Nav.Link as={Link} to="/DataChart">
                User DataChart
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="/edit/:id"></Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/View/:id"></Link>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Switch>
        <Route path="/DataChart">
          <ChartMy />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/view/:id">
          <VIew />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
