import React, { Component } from 'react'
import Loading from './loading.gif'

export class spinner extends Component {
    render() {
        return (
            <div>
                <img src={Loading} alt="loading" />
            </div>
        )
    }
}

export default spinner
