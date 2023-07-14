import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography align='left' sx={{flexGrow: 1}}>LibApp</Typography>
                <Button><Link to={'/'} style={{color:'white',textDecoration:'none'}}>View</Link></Button>
                <Button><Link to={'/add'} style={{color:'white',textDecoration:'none'}}>Add</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar