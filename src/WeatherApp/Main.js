import React, { Component } from 'react'
import Title from './Title'
import Form from './Form'
import Weather from './Weather'
import './Weather.css'

const API_KEYS='bf8ebd6823d41bb5db7c76d9f49ee8e1'
export class Main extends Component {
    state={
        temperature:"",
        city:"",
        country:"",
        humidity:"",
        description:"",
        error:""
}
getWeather=async(event)=>{
        event.preventDefault()
        const city=event.target.elements.city.value
        const country=event.target.elements.country.value
        const API_CALL= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEYS}&units=metric`)
        const data=await API_CALL.json()
       if(city && country){
        this.setState({
            temperature: data.main.temp,
            city:data.name,
            country:data.sys.country,
            humidity:data.main.humidity,
            description:data.weather[0].description,
            error:""
        })
    }else{
        this.setState({
            temperature:"",
            city:"",
            country:"",
            humidity:"",
            description:"",
            error:"Please enter the values"
        })
       
    }
       }
        
    render() {
        return (
            <div>
                <div className="wrapper">
                <div className="main">
                <div className="container">
                <div className="row">
                <div className=" title-container"><Title/></div>
                <div className=" form-container">
                <Form getWeather={this.getWeather}/>
                <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                />
                </div>
                </div>
                </div>
                </div>
                </div>
                
                
                
            </div>
        )
    }
}

                
export default Main
