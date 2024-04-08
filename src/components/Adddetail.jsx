import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Adddetail = () => {
  return (
    <div style={{padding:"80px"}}>
       <Typography variant='h4'> Add Blog Details</Typography><br></br>
    
       &nbsp;&nbsp;&nbsp;&nbsp; <TextField label='Blog name' variant='outlined'></TextField><br /><br />
        
       &nbsp;&nbsp;&nbsp;&nbsp; <TextField label='Description' variant='outlined'></TextField><br /><br />
        
       &nbsp;&nbsp;&nbsp;&nbsp; <TextField label='Author Name' variant='outlined'></TextField><br /><br />
       &nbsp;&nbsp;&nbsp;&nbsp;<Button variant='contained'color='success'>SUBMIT</Button> &nbsp;&nbsp;&nbsp;&nbsp;
       <Button variant='contained'color='error'>
       <Link to={"/back"}style={{textDecoration:'none',color:'white'}} >BACK</Link></Button>
          </div>
  )
}

export default Adddetail