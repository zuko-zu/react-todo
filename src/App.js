import React from 'react'
import List from './components/List/List'
import listSvg from './assets/icons/list.svg'


function App() {
  return (
    <div className="todo">
      <div className="todo__sidebar">
        <List items={[
          {
            icon: listSvg,
            name: 'Все задачи',
            active: true
          }
        ]} />
        <List items={[
          {
            color: 'green',
            name: 'Покупки',
            active: false
          },
          {
            color: 'blue',
            name: 'Фронтенд',
            active: false
          },
          {
            color: 'pink',
            name: 'Фильмы и сериалы',
            active: false
          }
        ]} />
      </div>
      <div className="todo__tasks">

      </div>
    </div>
  )
}

export default App;
