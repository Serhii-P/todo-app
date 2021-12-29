import React from 'react';

const Count = ({counter}) => {

    return (
        <>
          <span className="todo-count">
          {counter} items left
          </span>
        </>
    )
}

export default Count;