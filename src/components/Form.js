import React, {useState} from 'react';

const Form = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredTitleIsValid, setEnteredTitleIsValid] = useState(false);

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);

        if (event.target.value.trim() !== '') {
            setEnteredTitleIsValid(false);
        } 
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
  
        if (enteredValue.trim() === '') {
            setEnteredTitleIsValid(true);
            return;
        } 

        props.onSaveUserValue(enteredValue.trim());
        setEnteredTitleIsValid(false);
        setEnteredValue('');
    }

const nameInputClasses = enteredTitleIsValid 
    ? 'form-control invalid' 
    : 'form-control ';

    return (
        <div>
            <form className={nameInputClasses} onSubmit={formSubmitHandler}>
                <input
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                    onChange={inputChangeHandler}
                    value={enteredValue}
                />
            </form>
        </div>
    )
}

export default Form;