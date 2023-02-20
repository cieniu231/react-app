import React from "react";
import './components/menuitem.css'
import './App.css';
import CityList from "./components/listitems";

class App extends React.Component {

    constructor(props) {
        super(props);
       // this.state = {
         //   actualCityName: "Rotterdam"
        //};

    }
    handleChange(){
        console.log(this.props.name);
    }
    render(){
        const cities = ["Rotterdam", "Haga", "Amsterdam"];
        return(
                <CityList handleChange={this.handleChange} items={cities}/>
            )
        }
    }


export default App;
