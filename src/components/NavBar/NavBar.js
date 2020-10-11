import React from 'react'
import { AppBar,Paper,Button  } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {withRouter} from "react-router-dom";
import {BrowserRouter,Route,Link} from 'react-router-dom'


const NavBar = (props) => {
  return (

   <BrowserRouter>
      <Paper elevation={6} style={{ padding: "25px", marginBottom:"15px" }}>
      <Button variant="contained" color="info" style={{ marginRight: "25px" }} >Page One</Button>
      <Button variant="contained" color="info"  >Page Two</Button>
      
      </Paper>
      </BrowserRouter>
      
      
     




   

  )
}

export default NavBar
