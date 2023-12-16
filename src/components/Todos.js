import React from "react"
import { useSelector } from "react-redux"

const Todos = () => {

    const todos = useSelector(state => state.todos)

    return (
        <div>
            {todos.map(todo => <p key={todo.id}>{todo.text}</p>)}
        </div>
    )
}

export default Todos