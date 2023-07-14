import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddBooks from './AddBooks';

const ViewBooks = () => {
  var [books,setBooks] = useState([]);
  var [update,setUpdate] = useState(false);
  var [singleValue,setSingleValue] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3008/viewbooks")
    .then((response)=>{
      console.log(response.data);
      setBooks(response.data);
    })
  },[])
  var deleteValues =(id)=>{
    console.log(id);
    axios.delete("http://localhost:3008/deletebooks/"+id)
    .then((response)=>{
      alert("Deleted!");
      window.location.reload(false)
    })
    .catch((err)=>console.log(err))
  }
  const updateValues = (value)=>{
     console.log("Update Clicked!")
     setUpdate(true);
     setSingleValue(value);
  }
  var finalJSX = (
  <TableContainer style={{paddingTop:'110px'}}>
  <Table>
    <TableHead>
    <TableRow>
      <TableCell>Book Name</TableCell>
      <TableCell>Author</TableCell>
      <TableCell>Language</TableCell>
      <TableCell>Genre</TableCell>
      <TableCell>Book No</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
     {books.map((val,i)=>{
      return (
        <TableRow key={i}>
          <TableCell>{val.bookName}</TableCell>
          <TableCell>{val.author}</TableCell>
          <TableCell>{val.language}</TableCell>
          <TableCell>{val.genre}</TableCell>
          <TableCell>{val.bookNum}</TableCell>
          <TableCell>
            <Button onClick={()=>deleteValues(val._id)}>
              Delete
            </Button>
            </TableCell>
            <TableCell>
              <Button onClick={()=>updateValues(val)}>
                Update
              </Button>
            </TableCell>
        </TableRow>
      )
     })}
    </TableBody>
  </Table>
</TableContainer>
  )
  if(update) finalJSX = <AddBooks data={singleValue} method='put'/>
  return finalJSX;
};

export default ViewBooks