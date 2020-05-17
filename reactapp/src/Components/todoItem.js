import React from 'react';

const ToDoItem = props => {
const markHandler = (id) => props.markClicked(id)

    return (
        <div className={`card ${props.element.isCompleted ? 'completed' : ''}`} key={props.element.id} >
            <h2> {props.element.title} </h2>
            <button onClick={() => markHandler(props.element.id) }> Zaliczone ! </button>
        </div>
    )
}

export default ToDoItem;