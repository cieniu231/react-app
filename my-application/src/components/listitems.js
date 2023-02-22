import React from 'react'
import MenuItem from './menuitem'
import './menuitem.css'
import './navigation.css'
function CityList(props){

    const items = props.items;
    const listItems = items.map((item)=><MenuItem handleClick={props.handleChange} name={item} key={item}/>)
    return (
        <ul className={"menu-container"}>{listItems}</ul>
    )
}

export default CityList