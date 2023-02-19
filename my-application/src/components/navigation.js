import React from 'react'
import './navigation.css'
import MenuItem from "./menuitem";
class Menu extends React.Component {
    render(){
       return (
        <div>
            <ul className={"menu-container"}>
                <MenuItem name="Rotterdam"/>
                <MenuItem name="Haga"/>
                <MenuItem name="Amsterdam"/>
                <MenuItem name="Dortmund"/>
                <MenuItem name="Bruksela"/>
                <MenuItem name="Antwerpia"/>
                <MenuItem name="Paryż"/>
            </ul>
        </div>
        )
    }
}

export default Menu