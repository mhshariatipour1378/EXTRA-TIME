import {routes} from "./Route"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";





function App() {
  return (
      <Router>
          <div>
              <Switch>
                  {
                      routes.map((item) =>(
                          <Route {...item} />
                      ))
                  }
              </Switch>
          </div>
      </Router>
  );
}

export default App;
