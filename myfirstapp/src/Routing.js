import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Projects = () => <h1>Projects</h1>;
const ProjectsAlpha = () => <h1>Projects Alpha </h1>;
const Sample = (props) => <h1>Sample codes : Page {props.id}</h1>;

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/Projects">Projects</Link>
          <br />
          <Link to="/Projects/Alpha">Projects Alpha</Link>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Projects/Alpha" component={ProjectsAlpha} />
          <Route
            path="/Sample/:id"
            render={(props) => <Sample id={props.match.params.id} />}
          />

          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routing;
