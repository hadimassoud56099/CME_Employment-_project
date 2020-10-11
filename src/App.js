
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Paper,Button  } from '@material-ui/core';
import  VideosPage  from './VideosPage'
import   Counter   from './components/Counter/Counter'
import   CounterPage   from './components/CounterPage/CounterPage'





function App() {
 

  return (
    <Router>
    <React.Fragment>
       <Paper elevation={6} style={{ padding: "25px", marginBottom:"15px" }}>
       <Link className="nav-link" to="/VideosPage"> 
       <Button variant="contained" color="info" style={{ marginRight: "25px" }} >Page One</Button>
       </Link>
     
        <Link className="nav-link" to="/CounterPage/CounterPage">
        <Button variant="contained" color="info"  >Page Two</Button>
        </Link>

        </Paper>
        <Route path="/" component={App} exact />
        <Route path="/VideosPage" component={VideosPage} exact />
        <Route path="/CounterPage/CounterPage" component={CounterPage} />

      
         </React.Fragment>
       </Router>

  )
 
}

export default App
