import './List.scss'

const List = ({ items }) => {

    return (
        <ul className="list">
            {items.map(item => (
                <li className={`list__item ${item.active ? 'list__item--active' : ''}`}>
                    {
                        item.icon ?
                        
                        <i className="list__icon">
                            <img src={item.icon} alt="Список задач" />
                        </i> : 

                        <i className={`list__icon badge badge--${item.color}`}>
                        </i>
                    }
                <span>{item.name}</span>
            </li>
            ))}
        </ul>
    )
}

export default List