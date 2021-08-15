import MateriaUiForm from "./MateriaUiForm";
import SimpleForm from "./SimpleForm";
import ReactHookForm from "./ReactHookForm";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className=" sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Form Validation
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  Simple Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/react-hook-form" className="nav-link">
                  React Hook Form Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/material-form">
                  Material UI Form
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={SimpleForm} />
          <Route exact path="/react-hook-form" component={ReactHookForm} />
          <Route exact path="/material-form" component={MateriaUiForm} />
          <Route component={SimpleForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
