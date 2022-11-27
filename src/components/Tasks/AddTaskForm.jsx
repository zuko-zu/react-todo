import { useState } from 'react';
import axios from 'axios';

import addSvg from '../../assets/icons/add.svg';

function AddTaskForm( { list, onAddTask } ) {
  const [formVisibility, setFormVisibility] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isSubmiting, setIsSubmiting] = useState(false)

  const toggleFormVisibility = () => {
    setFormVisibility(!formVisibility)
    setInputValue('')
  }

  const addTask = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      completed: false
    }
    setIsSubmiting(true)
    axios.post('http://localhost:3001/tasks', obj)
      .then(({ data }) => {
      onAddTask(list.id, data)
      toggleFormVisibility()
      })
      .catch(() => {
        alert('Ошибка при добавлении задачи')
      })
      .finally(() => {
        setIsSubmiting(false)
      })
  }

  return (
    <div className="tasks__form">
      {!formVisibility ? (
        <div className="tasks__form-new" onClick={toggleFormVisibility}>
          <img src={addSvg} alt="Добавить задачу" />
          <span>Новая задача</span>
        </div>
        ) : (
        <div className="tasks__form-block">
          <input 
            className="field" 
            type="text" 
            placeholder="Текст задачи"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)} />
            <button
              disabled={isSubmiting}
              className="button"
              onClick={addTask}>
                {isSubmiting ? 'Добавление...' : 'Добавить задачу'}
            </button>
            <button 
              className="button button--grey"
              onClick={toggleFormVisibility}>
                Отмена
            </button>
          </div>
        )}
  </div>
  )
}

export default AddTaskForm