import logo from './logo.svg';
import {React} from 'react';
import './App.css';



import  AddTodo  from './components/AddTodo';
import List from './components/List';



const  App= ()=> {
  return (
    <div>

        <AddTodo />
        <List />
    </div>
    
      
 
  
     

  );
    
  
}

export default App;

