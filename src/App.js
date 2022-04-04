import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
// import Home from "./pages/home";
// import Search from "./pages/search";
import SearchHook from "./pages/searchHook";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Search /> */}
        <SearchHook />
      </div>
    </Provider>
  );
}

export default App;
