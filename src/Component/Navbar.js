import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, Avatar} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSelector } from "react-redux";
//import {handleStep} from "../redux/reducer"

import {
  
  Group as GroupIcon 
  
} from "@mui/icons-material";


const Navbar = ({ children }) => {

  const {step} = useSelector((state)=>state.auth)
  return (
    <>
    <AppBar position="static" style={{ backgroundColor: '#FFA500' }}>
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
       
        </Typography>
        <IconButton color="inherit">
          <Badge  color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Box ml={2}> {/* Add space */}
          <IconButton color="inherit">
            <Avatar alt="Profile Picture" src="/path/to/profile-pic.jpg" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>


   

   


<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,marginBottom: "1rem", paddingLeft: "2rem", marginTop:"2rem" }}>
     {
      step>0?<Avatar sx={{ borderRadius: '1rem', width: 50, height: 50 ,backgroundColor: "#fcd4ae" }}>
      <PersonAddIcon sx={{color:"orange"}}/>
    </Avatar>:<Avatar sx={{ borderRadius: '1rem', width: 50, height: 50 ,backgroundColor: "#e6e4e1" }}>
        <PersonAddIcon sx={{color:"orange"}}/>
      </Avatar>
     } 
      <Box sx={{ width: "6rem", height: "0.1rem", backgroundColor: "#d6d6d6" }} />
      {
      step>=2?<Avatar sx={{ borderRadius: '1rem', width: 50, height: 50 ,backgroundColor: "#fcd4ae" }}>
      <GroupIcon sx={{color:"orange"}}/>
    </Avatar>:<Avatar sx={{ borderRadius: '1rem', width: 50, height: 50 ,backgroundColor: "#e6e4e1" }}>
        <GroupIcon sx={{color:"orange"}}/>
      </Avatar>
     } 
      <Box sx={{ width: "6rem", height: "0.1rem", backgroundColor: "#d6d6d6" }} />
      {
      step>=3?<Avatar sx={{ borderRadius: '1rem', width: 50, height: 50 ,backgroundColor: "#fcd4ae" }}>
      <PersonAddIcon sx={{color:"orange"}}/>
    </Avatar>:<Avatar sx={{ borderRadius: '1rem', width: 50, height: 50 ,backgroundColor: "#e6e4e1" }}>
        <PersonAddIcon sx={{color:"orange"}}/>
      </Avatar>
     } 
    </Box>





{/* <Paper elevation={8} style={{ paddingLeft: '10rem', paddingRight:"10rem", paddingTop:"10rem"}}> */}
{/* <Box sx={{paddingBottom:"4rem" , paddingLeft:"30rem"}}>
<Avatar sx={{ bgcolor: 'orange' , borderRadius: '0', width: 60, height: 60}}>
      <PersonAddIcon />
    </Avatar>
</Box> */}





  {children}

</>
  );
}

export default Navbar;