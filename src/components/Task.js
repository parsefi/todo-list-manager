import React from 'react';
import { useState } from 'react';
import { FaTimes, FaPen } from 'react-icons/fa';

const Task = ({ text, date, id, onDelete, onToggle, reminder }) => {
  return (
    <div
      className={`task ${reminder ? 'remind' : ''}`}
      onDoubleClick={() => onToggle(id)}
      
    >
      <div className='left'>
        <h3 className='text'>{text}</h3>
        <p className='date'>{date}</p>
      </div>

      <div className='right'>
        <div className='edit-task'>
          <FaPen className='edit-button icon-button' />
        </div>

        <div
          className='delete-task'
          onClick={() => {
            onDelete(id);
          }}
        >
          <FaTimes
            style={{ cursor: 'pointer' }}
            className='del-button icon-button'
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
