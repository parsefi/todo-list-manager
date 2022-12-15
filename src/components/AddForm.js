import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useState } from 'react';
// document.querySelector('.submitTast').disabled = false;
const AddForm = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();

    onAdd({ task, date, reminder });

    setTask('');
    setDate('');
    setReminder(false);
  };
  return (
    <form className='addForm' onSubmit={submitForm} autoComplete='off'>
      <div className='task-text form-input form-item'>
        <label htmlFor='task-text'>Task</label>
        <input
          type='text'
          name='task'
          id='task-text'
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </div>
      <div className='task-date form-input form-item'>
        <label htmlFor='task-date'>Date</label>
        <input
          type='text'
          name='date'
          id='task-date'
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className='task-reminder form-item'>
        <label htmlFor='task-reminder'>Reminder</label>
        <input
          type='checkbox'
          name='reminder'
          id='task-reminder'
          checked={reminder}
          value={reminder}
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
        />
      </div>
      <input
        type='submit'
        value='Add Task'
        className='submitTask button block-button'
        disabled={task == '' ? 'disabled' : ''}
      />
    </form>
  );
};

export default AddForm;
