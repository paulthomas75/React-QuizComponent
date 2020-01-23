
import React, { Component } from 'react';

class QuizQuestion extends Component {
    render() {
        return ( 
            <main>
                <section>
                <p>// instruction text goes here</p>
                </section>
                <section className="buttons">
                <ul>
                    {this.props.quiz_question.answer}
                </ul>
                </section>
            </main>
          )
    }
}

export default QuizQuestion