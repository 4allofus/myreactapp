import React from 'react'

function TodoItems(props){
    return(
        <div className = "todo-item">
        <input type="checkbox" checked={props.myItems.completed}/>
        <p>{props.myItems.text}</p>
        </div>
    )

}

export default TodoItems