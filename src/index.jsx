import React from 'react';
import ReactDOM from 'react-dom/client';


function ListItems(props) {
    const fruits = props.fruits;
    const listItems = fruits.map((fruits) =>
      <li>{fruits}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  let fruits = ["apple", "banana", "orange", "grape", "kiwi"]; 
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ListItems fruits={fruits} />);