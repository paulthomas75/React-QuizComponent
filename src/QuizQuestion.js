import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            incorrectAnswer: false
        }
    }

    handleClick(buttonText) {
        this.setState((state) => {
            return { incorrectAnswer: !(buttonText === this.props.quiz_question.answer) }
        }, () => {
            if(!this.state.incorrectAnswer) this.props.showNextQuestionHandler()
        });
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) => {
                            return <QuizQuestionButton
                                key={index}
                                button_text={answer_option}
                                clickHandler={this.handleClick.bind(this)}
                            ></QuizQuestionButton>
                        })}

                        {this.state.incorrectAnswer ? 
                        <p className='error'>Sorry, that's not right</p>
                         : null}
                    </ul>

                    
                </section>
            </main>
        )
    }
}

export default QuizQuestion