import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Trending from "./pages/trending";
import { store } from "./redux/store";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    name: "Home",
  },
  {
    path: "/trending",
    component: Trending,
    name: "Trending",
  },
];

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar routes={routes} />

        <div className="App">
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
