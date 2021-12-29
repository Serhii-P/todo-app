import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({
    listOfTodos, 
    onDeleteItem, 
    onCompleted, 
    onEditItem,
    FILTER_MAP,
    filter
    }) => {

    const itemDeleteHandler = (id) => {
        onDeleteItem(id);
    }

    const completeHandler = (id) => {
        onCompleted(id);
    }

    const itemEditHandler = (id, newTitle) => {
        // console.log(title)

        onEditItem(id, newTitle);
    }

    return (
        <div>
            <ul className="todo-list">
                {listOfTodos
                .filter(FILTER_MAP[filter])
                .map( item => ( 
                    <TodoItem 
                        key={item.id}
                        id={item.id} 
                        title={item.title} 
                        completed={item.completed}
                        onDeleteItem={itemDeleteHandler}
                        onCompleted={completeHandler}
                        onEditItem={itemEditHandler}
                        // onDoubleClick={() => console.log(123)}
                    />
                ))}

            </ul>
        </div>
    )
}

export default TodoList;