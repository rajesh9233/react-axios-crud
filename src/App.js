import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import User from "./Components/User";
import UsersList from "./Components/UsersList";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/user" component={User} />
          <Route path="/user/:id" component={User} />
          <Route path="/" component={UsersList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
