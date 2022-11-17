import { useState } from 'react'

import List from '../List/List'
import Badge from '../Badge/Badge'

import './AddList.scss' 

import closeIcon from '../../assets/icons/close.svg'

const AddList = ({ colors, onAdd }) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [selectedColor, selectColor] = useState(colors[0].id)
  const [inputValue, setInputValue] = useState('')

  const onClose = () => {
    setVisiblePopup(false)
    selectColor(colors[0].id)
    setInputValue('')
  } 

  const addList = () => {
    if (!inputValue) {
      alert('Введите название списка')
      return
    }

    const color = colors.filter(color => color.id === selectedColor)[0].name

    onAdd({
      "id": Math.random(), // Временно так
      "name": inputValue,
      color // color: color
    })

    onClose()
  }

  return (
    <div className="add-list">
      <List 
      onClick={() => setVisiblePopup(true)}
      items={[
          {
              className: 'list__add-button',
              icon: 
              <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
              >
              <path 
                  d="M6 1V11" 
                  stroke="#868686" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
              />
              <path 
                  d="M1 6H11" 
                  stroke="#868686" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
              />
              </svg>,
              name: 'Добавить список',
              active: false
          }
      ]} />
      {visiblePopup && <div className="add-list__popup">
        <img 
        src={closeIcon} 
        alt="Закрыть поп-ап" 
        className="add-list__popup-close-btn" 
        onClick={onClose} />

        <input 
        className="field" 
        type="text" 
        placeholder="Название списка" 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} />

        <div className="add-list__popup-colors">
          {
            colors.map(color => (
              <Badge 
              onClick={() => selectColor(color.id)} 
              key={color.id} 
              color={color.name} 
              className={selectedColor === color.id && 'badge--active'} />
            ))
          }
        </div>

        <button 
        className="button"
        onClick={addList}>
          Добавить</button>
      </div>}
    </div>
  )
}

export default AddList