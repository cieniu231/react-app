import React from "react";
import './components/menuitem.css'
import './App.css';
import CityList from "./components/listitems";
import City from './components/city'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            actualCityName: ''
        };

    }
    handleChange(e){
        this.setState({actualCityName: e.target.id});
        console.log(e.target.id);
    }
    render(){
        const cities = ["Rotterdam", "Haga", "Amsterdam"];
        return(
            <div>
                <CityList handleChange={this.handleChange} items={cities}/>
                <City name={this.state.actualCityName}/>
            </div>
            )
        }
    }


export default App;
