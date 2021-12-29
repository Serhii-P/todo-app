import React, {useState, useEffect, useCallback} from 'react';

const TodoItem = ({
    id, 
    title, 
    completed, 
    onDeleteItem, 
    onCompleted,
    onEditItem}) => {
    const [isEditing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    
    const toggleCompleteHandler = (id) => {
        onCompleted(id)
    }

    const deleteItemHandler = (id) => {
        onDeleteItem(id);
    }

    const editNewTitleHandler = (e) => {
        setNewTitle(e.target.value);
    }


    const escFunction = useCallback((e) => {
        if (e.key==='Escape'||e.key==='Esc'||e.keyCode===27) {
          setEditing(false);

        }
      }, []);
    
      useEffect(() => {
        document.addEventListener("keydown", escFunction);
    
        return () => {
          document.removeEventListener("keydown", escFunction);
        };
      }, [escFunction]);


    const activateEditing = (id, newTitle, e) => {
        if(completed) {
            return;
        }
        setEditing(true);
        setNewTitle(newTitle);

    }

    const addNewText = (e) => {
        e.preventDefault();

        setEditing(false);
        onEditItem(id, newTitle);
    }

    const tagClassToggle = () => {
        if(completed) {
            return 'completed';
        } else if (isEditing) {
            return 'editing';
        } else {
            return '';
        }
    }
   
    const checkboxMark = completed ? true : false;
    
    return (
        <>
           <li  className={tagClassToggle()}>
                <div className="view">
                    <input 
                        type="checkbox" 
                        className="toggle" 
                        checked={checkboxMark}
                        onChange={() => toggleCompleteHandler(id)}
                       
                    />
                    <label onDoubleClick={(e) => activateEditing(id, newTitle, e)}>
                        {title}
                    </label>
                    <button 
                        type="button" 
                        className="destroy" 
                        onClick={() => deleteItemHandler(id)}
                        
                    />
                </div>
                <form onSubmit={addNewText} onBlur={addNewText}
                >
                    
                <input 
                    type="text" 
                    className="edit"  
                    value={newTitle}
                    onChange={editNewTitleHandler}
                    // onKeyPress={(e) => keyEnterPress(e)}
                />
                </form>
            </li>

             
        </>
    )
}

export default TodoItem;