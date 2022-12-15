import React from 'react';
import Task from './Task';
import Header from './Header';
import AddForm from './AddForm';
import { useState } from 'react';
const Tasks = ({ datas, onDelete, onToggle, reminder, addTaskItem }) => {
  const [form, setForm] = useState(false);
  const toggleForm = () => {
    setForm(!form);
    console.log(form);
  };

  const taskAddItem = ({ task, date, reminder }) => {
    addTaskItem(task, date, reminder);
    console.log(task, date, reminder);
  };

  let text = 'hello';
  return (
    <div className='tasks'>
      <Header onToggleForm={toggleForm} form={form} />

      {form && <AddForm onAdd={taskAddItem} />}
      {datas.length > 0 ? (
        datas.map((person) => {
          return (
            <Task
              key={person.id}
              text={person.text}
              date={person.date}
              onDelete={onDelete}
              id={person.id}
              onToggle={onToggle}
              reminder={person.reminder}
            />
          );
        })
      ) : (
        <p className='no-task'>there is no task</p>
      )}
    </div>
  );
};

export default Tasks;
