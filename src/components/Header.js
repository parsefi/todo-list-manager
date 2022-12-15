import React from 'react';

const Header = ({ onToggleForm, form }) => {
  console.log(onToggleForm);
  return (
    <div className='header'>
      <h2 className='title'>toDo List</h2>
      <button className='addTask button block-button' onClick={onToggleForm}>
        {form ? 'Close' : 'Add'}
      </button>
    </div>
  );
};

export default Header;
