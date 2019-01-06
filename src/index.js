import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Seasons from './Seasons';
import Spinner from './Spinner';
export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lat: null, errorMsg: ''
        }
    }
    componentDidMount = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMsg: err.message })
        )
    }

    render() {
        const { lat, errorMsg } = this.state;
        if (!lat && errorMsg) {
            return <div>{errorMsg}</div>
        }
        if (lat && !errorMsg) {
            return <Seasons lat={lat} />
        }
        return <Spinner message='Please Accept Location Request' />
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)