/* import listSvg from "../../src/assets/img/list.svg";
 */
import classNames from "classnames";
import Badge from "../Badge/Badge";

import removeSvg from '../../assets/img/remove.svg';

import "./List.scss";

const List = ({items, isRemovable, onClick, onRemove}) => {
  
  const removeList = (item) =>{
    if(window.confirm('Вы действительно хотите удалить список?')){
      onRemove(item)
    }
  }
  
  return (
         <ul onClick={onClick} className="list">
          {items.map((item, index) =>(
            <li key={index} className={classNames(item.className, {'active': item.active})}>
            <i>{item.icon ? item.icon : <Badge color={item.color}/>}</i>
            <span>{item.name}</span>
           {isRemovable && <img onClick={()=>removeList(item)} className="list__remove-icon" src={removeSvg} alt="remove" />}
          </li>)
        )
      }
      </ul>
  );
};

export default List