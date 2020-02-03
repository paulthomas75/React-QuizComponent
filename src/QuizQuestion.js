import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((v, i) => {
                            return <QuizQuestionButton key={i} button_text={v}></QuizQuestionButton>
                        })}
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion