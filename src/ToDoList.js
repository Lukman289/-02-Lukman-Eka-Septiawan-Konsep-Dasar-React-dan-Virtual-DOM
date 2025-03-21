import React, {useState} from "react";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    
    const handleAdd = () => {
        setTodos([...todos, text]);
        setText("");
    }
    
    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    
    return (
        <div>
        <input type="text" value={text} onChange={handleTextChange} />
        <button onClick={handleAdd}>Add</button>
        <ul>
            {todos.map((todo, index) => (
            <li key={index}>
                {todo}
                <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ToDoList;