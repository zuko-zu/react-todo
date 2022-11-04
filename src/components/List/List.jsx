import classNames from 'classnames'
import './List.scss'
import Badge from '../Badge/Badge'

const List = ({ items, isRemovable, onClick }) => {

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
                </li>
            ))}
        </ul>
    )
}

export default List