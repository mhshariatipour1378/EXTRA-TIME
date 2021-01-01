import {routes} from "./Route"
import {useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import BookMarkProvider from "./components/contexts/BookMarkProvider"
import CounterPlayersBookMark from "./components/contexts/CounterBookMarks"
import LoaderProvider  from "./components/contexts/LoaderProvider"


function App(){


  return (
    <LoaderProvider>
      <BookMarkProvider>
          <CounterPlayersBookMark>
              <Router>
                  <Switch>
                      {
                          routes.map((item,index) =>(
                              <Route key={index} {...item} />
                          ))
                      }
                  </Switch>
              </Router>
          </CounterPlayersBookMark>
      </BookMarkProvider>
    </LoaderProvider>
  );
}

export default App;
