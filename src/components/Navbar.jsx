import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography style={{marginRight:"100px"}}>WELCOME</Typography>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success'>
                     <Link to={"/a"}style={{textDecoration:'none',color:'white'}} >HOME</Link></Button> 
                      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='warning'><Link to={"/add"}style={{textDecoration:'none',color:'white'}}>ADD BLOG</Link></Button>
           
            </Toolbar>
           
        </AppBar>
        <h1 style={{paddingLeft:"250px"}}>WELCOME</h1>
    </div>
  )
}

export default Navbar