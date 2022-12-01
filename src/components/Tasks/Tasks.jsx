import axios from 'axios'

import AddTaskForm from './AddTaskForm'
import Task from './Task'


import './Tasks.scss'

import editSvg from '../../assets/icons/edit.svg'

const Tasks = ({ list, onEditTitle, onAddTask, onRemoveTask, onEditTask, withoutEmpty }) => {

  const editTitle = () => {
    const newTitle = window.prompt('Введите новое название списка', list.name)
    if (newTitle) {
      onEditTitle(list.id, newTitle);
      axios
        .patch('http://localhost:3001/lists/' + list.id, {
          name: newTitle
        })
        .catch(() => {
          alert('Не удалось обновить название списка')
        })
    }
  }

  return (
    <div className="tasks">
      <h2 
        className="tasks__title"
        style={{color: list.color.hex}}>
        {list.name}
        <img 
          src={editSvg} 
          alt="Изменить название списка"
          onClick={editTitle}
        />
      </h2>

      <div className="tasks__items">
      { list.task && !withoutEmpty && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
      {list.tasks && list.tasks.map(task => (
        <Task 
          key={task.id} 
          list={list}
          onRemove={onRemoveTask}
          onEdit={onEditTask}
          {...task} /> // Будут переданы все свойства task в качестве пропсов компонента
      ))}
      <AddTaskForm 
        key={list.id} // Нужен key, чтобы распознавать изменившиеся элементы. Здесь без него, при переходе на другие списки, форма будет сохраняться состояние, в котором находилась до перехода.
        list={list}
        onAddTask={onAddTask}
      />
      </div>
    </div>
  )
}

export default Tasks