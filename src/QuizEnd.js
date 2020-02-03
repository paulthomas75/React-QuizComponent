import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class QuizEnd extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href=''>Reset Quiz</a>
            </div>
        )
    }
}

export default QuizEnd
