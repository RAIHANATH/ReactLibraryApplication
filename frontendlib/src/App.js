import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ViewBooks from './components/ViewBooks';
import AddBooks from './components/AddBooks';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path='/' element={<ViewBooks/>}/>
       <Route path='/add' 
       element={<AddBooks data={{bookName:"",author:"",language:"",genre:"",bookNum:""}} method="post"/>}/>
     </Routes>
    </div>
  );
}

export default App;
