import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Viewdata = () => {
    var [users,setUsers] = useState([])

    useEffect(()=>{
 
        axios.get("https://jsonplaceholder.typicode.com/posts")
 
        .then((res)=>{
 
            console.log(res.data)
 
            setUsers(res.data)
 
        })
 
        .catch(err=>console.log(err))
    }) 

  return (
    <div style={{padding:"50px"}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell><h3>ID</h3></TableCell>
                    <TableCell><h3>TITLE</h3></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((val,i)=>{
                    return(
                        <TableRow>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.title}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant='contained'color='error'>
       <Link to={"/back"}style={{textDecoration:'none',color:'white'}} >BACK</Link></Button>

    </div>
  )
}

export default Viewdata