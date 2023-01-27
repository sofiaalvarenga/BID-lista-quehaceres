import React, { useEffect } from 'react';
import {useState} from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css';

const TodoList = () => {

    const [chores, setChores] = useState([]); //Arr de tareas 
    const [newChore, setNewChore] = useState(""); //Estado para nuevas tareas

    const handleNewChore = (e) => {
        e.preventDefault();
        let todo = [...chores];
        todo.push({ name: newChore, status: false }) //agrega nueva tarea, status false en el checkbox
        setChores([...todo]);
        setNewChore(""); //Vacía el input de ADD 
    }

    const handleStatusChange = (value, idx) => {
        let todo = [...chores];
        todo[idx].status = value;
        setChores([...todo]);
    }

    const handleDelete = (idx) => {
        let todo = [...chores];
        let filtered = todo.filter((value, index, array) => index !== idx) //filtará las tareas cuyo idx no coincida
        setChores([...filtered]);
    }


    useEffect(() => {
        console.log("CHORES: ", chores)
    }, [chores])

    return (
    <div className='todo'> 
        <form onSubmit={handleNewChore} className='chore'> 
            <input className='input' type="text" value={newChore} onChange={(e) =>setNewChore(e.target.value)} /> 
            <button id='add'>Add</button>
        </form>
        <ul className='list'>
            {chores.map((item, idx) => {
                return (
                <Todo //Retorna el componente 'todo'
                key={{idx}} {...item}
                handleStatus={handleStatusChange} //actualiza el estado de la lista
                index={idx}
                handleDelete={handleDelete} //eliminar de la lista
                />
                )
            })}
        </ul>
    </div>
    )
}

export default TodoList

