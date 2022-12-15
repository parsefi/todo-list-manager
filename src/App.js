import React from 'react';
import Tasks from './components/Tasks';
import { useState } from 'react';
import './index.css';
const App = () => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      text: 'go to gym',
      date: 'september 23',
      reminder: false,
    },
    {
      id: 2,
      text: 'do homeworks',
      date: 'september 24',
      reminder: true,
    },

    {
      id: 3,
      text: 'go swimming',
      date: 'september 25',
      reminder: false,
    },
  ]);
  let reminder = false;
  //change reminder
  const toggleReminder = (id) => {
    setDatas(
      datas.map((data) =>
        data.id == id ? { ...data, reminder: !data.reminder } : data
      )
    );
  };

  //add task
  // const addTask = (text, reminderSet, e) => {
  //   // e.preventDefault();
  //   console.log(typeof (reminderSet));
  //   setDatas([...datas, {
  //     id: Math.random(1, 300),
  //     text: text,
  //     date: 'every day',
  //     reminder: (reminderSet == 'on' ? true : false)
  //   }])

  //   console.log(datas.map(data => data.reminder));
  //   // datas.push({
  //   //   id: 4,
  //   //   text: text,
  //   //   date: 'every day',
  //   //   reminder: true
  //   // })
  // }

  const addTask = (task, date, reminder) => {
    setDatas([
      ...datas,
      {
        id: Math.floor(Math.random() * 10000 + 1),
        text: task,
        date: date,
        reminder: reminder,
      },
    ]);
  };

  const deleteTask = (id) => {
    console.log(id);
    const other = datas.filter((data) => data.id !== id);
    setDatas(other);
  };
  return (
    <div className='container'>
      <Tasks
        datas={datas}
        onDelete={deleteTask}
        onToggle={toggleReminder}
        isReminded={reminder}
        addTaskItem={addTask}
      />
    </div>
  );
};

export default App;
