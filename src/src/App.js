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



function App(){


  return (

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
  );
}

export default App;
