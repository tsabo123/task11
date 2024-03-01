import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import Listitem from "./Listitem"


 
function App() {
  let arr = ["apple", "banana", "orange", "grape", "kiwi"];

  return (

    <Fragment >
       <Listitem masivi={arr}></Listitem>
    </Fragment>
  );
    


  }
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);