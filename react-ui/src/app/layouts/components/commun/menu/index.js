import React, { Component } from 'react';
//import { Icon } from 'react-fa';
import './index.css';

export default class Menu extends Component {
    render() {
        return (
            <div id='header'>
                <a href='https://github.com/jendigital/impala' target='_blank' rel="noopener noreferrer">
                    <div id='logo_container'>
                        <img className='logo' alt='Impala' src='https://storage.googleapis.com/impala/logo.png' />
                    </div>
                </a>
            </div>
        );
    }
}