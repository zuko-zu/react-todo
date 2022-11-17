import classNames from 'classnames'

import Badge from '../Badge/Badge'

import './List.scss'

import removeSvg from '../../assets/icons/remove.svg'

const List = ({ items, isRemovable, onClick, onRemove }) => {

  const removeList = (item) => {
    if (window.confirm('Вы действительно хотите удалить список?')) {
      onRemove(item)
    }
  }

  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, 'list__item', {'list__item--active': item.active})} >
          <i className="list__icon">
            {item.icon ? (
              item.icon
            ) : (
              <Badge color={item.color} />
            )}
          </i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
            className="list__remove-icon" 
            src={removeSvg} 
            alt="Удалить список" 
            onClick={() => removeList(item)} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default List