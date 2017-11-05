import React, { Component } from 'react';
import MainLayout from '../../layouts/default';
import Quizz from './components/quizz';
import Signup from './components/signup';
import Search from './components/search';
import './index.css';

export default class DeezerSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout>
                <Quizz />
                <Signup />
                <Search />
            </ MainLayout>
        )
    }
}