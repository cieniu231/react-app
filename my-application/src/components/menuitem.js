import React from 'react'
import './menuitem.css'

class MenuItem extends React.Component {

    render() {
        return(
          <div className={"menuitem-container"}>
              <li className={"menuitem"} onClick={this.props.handleClick} id={this.props.name}>
                  {this.props.name}
              </li>
          </div>
        )
    };
}

export default MenuItem