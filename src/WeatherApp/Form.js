import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <form  onSubmit={this.props.getWeather}>
                <input className="try" type="text" name="city" placeholder="City..."/>
                <input className="try" type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
                </form>

                
                
            </div>
        )
    }
}

export default Form
