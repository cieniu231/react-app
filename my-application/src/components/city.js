import React from 'react'
import './city.css'

class City extends React.Component {

    render() {
        return(
            <div className={"city-container"}>
            <div className={"city-header"}>
            <h1> {this.props.name} </h1>
                <article>

                </article>
            <div className={"city-to-do"}>

            </div>
            </div>
            </div>
        )
    }
}

export default City