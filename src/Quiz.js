
import React, { Component } from 'react';
let quizData = require('./quiz_data.json');
export class Quiz extends Component {
    constructor(props) {
        super();
        this.state = {quiz_position: 1};
    }
    render() {
        return "<div class='QuizQuestion'></div>"
    }
}