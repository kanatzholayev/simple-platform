import "./App.css";
import LoginForm from "./components/LoginForm";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
