import React from "react";
import './components/menuitem.css'
import './App.css';
function cityList(props) {
    const cities = props.cities ;
    const listItems = cities.map((city) =>
    <div className={"menuitem-container"}>
        <li className={"menuitem"}>
            {city}
        </li>
    </div>
);
    return (
        <ul className={"menu-container"}>{listItems}</ul>
    );
}



export default cityList();
