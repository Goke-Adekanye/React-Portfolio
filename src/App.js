import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loader } from "./components";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Services = lazy(() => import("./pages/services"));
const Contact = lazy(() => import("./pages/contact"));

function App() {
  return (
    <div className="main">
      <Router>
        <Header />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
