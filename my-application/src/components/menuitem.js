import React from 'react'
import './menuitem.css'

class MenuItem extends React.Component {
    handleClick = () => {
        console.log('Dzień dobry');
    }

    render() {
        return(
          <div className={"menuitem-container"}>
              <li onClick={this.handleClick} className={"menuitem"}>
                     {this.props.name}
              </li>
          </div>
        )
    };
}

export default MenuItem