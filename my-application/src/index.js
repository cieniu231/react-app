import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/navigation'
import City from './components/city'


function CityList(props) {
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

const cities = ['Haga','Amsterdam','Dortmund'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CityList cities={cities}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
