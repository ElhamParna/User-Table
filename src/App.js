import "./App.css";
//components
import Navbar from "./Shared/Navbar";
//components
import Users from "./components/Users";
import DetailsUser from "./components/DetailsUser";
//router
import { Route, Switch, Redirect } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Provider store={store}>
        <Switch>
          <Route path="/user/:id" component={DetailsUser} />
          <Route path="/user" component={Users} />
          <Redirect to="/user" />
        </Switch>
      </Provider>
      
    </div>
  );
}

export default App;
