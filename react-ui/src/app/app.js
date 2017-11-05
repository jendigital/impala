import React, { Component } from 'react'
import { Route } from 'react-router'

import ImpalaSearch from './pages/impala'

export default class App extends Component {
    render() {
        return (
            <div id="container">
                <Route exact path='/' render={() => <ImpalaSearch store={this.props.store} history={this.props.history} />} />
            </div>
        )
    }
}