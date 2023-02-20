import React from 'react'
import './menuitem.css'

class MenuItem extends React.Component {

    render() {

        return(
          <div className={"menuitem-container"}>
              <li key={this.props.name} className={"menuitem"} onClick={this.props.handleClick.bind(this)}>
                     {this.props.name}
              </li>
          </div>
        )
    };
}

export default MenuItem