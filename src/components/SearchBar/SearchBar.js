import React, { useState } from "react";
import { Paper, TextField,Button } from "@material-ui/core";
import {FaSearch } from "react-icons/fa";

export default ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => setSearchTerm(event.target.value);


  return (
    <div>
     <Paper elevation={6} style={{ padding: "25px", }}spacing={10}> 
      <TextField
        fullWidth
        label={<FaSearch/>}
        value={searchTerm}
        onChange={handleChange}
          
      />
       <Button variant="contained" color="info" disableElevation onClick={()=>onSubmit(searchTerm)} style={{marginRight:"15px"}}>Search</Button>
    </Paper>
     
      </div>

   
  );
}



