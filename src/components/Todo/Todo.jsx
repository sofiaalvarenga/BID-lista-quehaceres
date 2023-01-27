import React from 'react';

const Todo = (props) => {

    return (
        <li>{props.status === true ?
            <s>{props.name}</s>
            :
            props.name}
            <input className='checkbox' type="checkbox" checked={props.status} onChange={(e) => props.handleStatus(e.target.checked, props.index)} />
            <button id='delete' onClick={(e) => props.handleDelete(props.index)}> Delete </button>
        </li>
    )
}
export default Todo;