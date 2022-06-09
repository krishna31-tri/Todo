import React, { useState } from 'react';
import Todo from './components/Todo';
import './App.css';

const App = () => {


  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const eventItem = (event) => {
    setInputList(event.target.value);
    console.log(setInputList)
  };
 

    const listOfItems = () => {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      })
      setInputList("");
    };
    const deleteItems = (id) => {
      console.log(id,"Deleted");
  
      setItems((oldItems) => {
        return oldItems.filter((arrEle, index) => {
          return index !== id;
        });
      });
    };

    return (
      <>
        <div className='main_div'>
          <div className='center_div'>
            <h1 className='head'>Todo List</h1>
            <input className='tinput'
              type='text'
              placeholder='Add a Item'
              value={inputList}
              onChange={eventItem} />
            <button onClick={listOfItems}>+</button>
            <ol>
              {/* <li>{inputList}</li> */}
              {items.map((itemval, index) => {
                return <Todo key={index}
                  id={index}
                   text={itemval}
                   
                  onSelect={deleteItems} />
              }
              )}
            </ol>
          </div>
        </div>
      </>
    )

  };

export default App
