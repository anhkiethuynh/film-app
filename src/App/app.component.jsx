// import PropTypes from "prop-types";
import "./app.style.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PAGE_PATH } from "../constant/enum";
import Home from "../pages/Home/home.component";
import Header from "../layouts/Header/header.component";
import Page404 from "../layouts/Page404/page404.component";
const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-wrapper">
        <Switch>
          <Route path={`/${PAGE_PATH.HOME}`} exact>
            <Home />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
