import React from 'react'
import './city.css'
import { citiesData } from '../data/rotterdam.js'

class City extends React.Component {

    render() {
        return(
            <div className={"city-container"}>
            <div className={"city-header"}>
                <h1> {this.props.name} </h1>
            </div>
            <div className={"city-picture"}>
            </div>
            <div className={"city-description"}>
                <article>
                    {this.props.name}
                    <div>
                        {citiesData.map((data, key) => {
                            if(data.name === this.props.name) {
                                return (
                                    <div>
                                    <div className="description-container" key={key}>
                                        <p>{data.description}</p>
                                    </div>
                                    <div className="when-container">
                                        {data.when}

                                    </div>
                                    </div>
                                );
                            }
                        })}
                    </div>

                </article>
            </div>
            <div className={"city-to-do"}>
                {this.props.name}
                {citiesData.map((data, key) => {
                    if(data.name === this.props.name) {
                        return (
                            <div key={key}>
                                {data.attr1 +
                                    " , " +
                                    data.attr2 +
                                    " , " +
                                    data.attr3
                                }
                            </div>
                        );
                    }
                })}

            </div>
            </div>
        )
    }
}

export default City