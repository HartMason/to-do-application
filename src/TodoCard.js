import React from 'react';

function ToDoCard(props){
  return(
    <li>{props.title}
      <button className="removeButton" onClick={ () => { props.clickToRemove(props.index) }}>Remove</button>
    </li>
    
  )
}

export default ToDoCard
