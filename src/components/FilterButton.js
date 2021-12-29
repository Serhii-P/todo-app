import React from 'react';

const FilterButton = ({name, isPressed, setFilter}) => {


const selectedLink = isPressed ? 'selected' : '';

    return (
        <>
            <li> 
                <button 
                    className={selectedLink} 
                    onClick={() => setFilter(name)}
                >
                    {name}
                </button>
            </li>
        </>
    )
}

export default FilterButton;