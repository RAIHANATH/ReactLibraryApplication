import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBooks = (props) => {
  var navigate = useNavigate();
  console.log("props.data", props.data);
    console.log("props.method", props.method);
  const[inp,setInp] = useState(props.data);
    
    const inputHandler = (e)=>{
      const {name, value} = e.target;
      setInp((inp)=>({...inp,[name]:value}))
      console.log(inp)
    }
    const readHandler =()=>{

      console.log('clicked');
      if(props.method==="post"){
      axios.post("http://localhost:3008/addbooks",inp)
      .then((Response)=>{
        alert("Data Added!");
        navigate('/')
      })
      .catch(err=>console.log(err))
    };
    if(props.method==="put"){
      axios.put("http://localhost:3008/edit/"+inp._id,inp)
      .then((response)=>{
        alert("Updated!");
        window.location.reload(false)
      })
    }
  }
  return (
    <div style={{paddingTop:'100px'}}>
     <TextField name='bookName' value={inp.bookName} onChange={inputHandler} label='Book Name'/>
     <br /><br />
     <TextField name='author' value={inp.author} onChange={inputHandler} label='Author'/>
     <br /><br />
     <TextField name='language' value={inp.language} onChange={inputHandler} label='Language'/>
     <br /><br />
     <TextField name='genre' value={inp.genre} onChange={inputHandler} label='Genre'/>
     <br /><br />
     <TextField name='bookNum' value={inp.bookNum} onChange={inputHandler} label='Book Num'/>
     <br /><br />
     <Button variant='contained' onClick={readHandler}>Submit</Button>
     
    </div>
  )
}

export default AddBooks