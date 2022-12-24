import './App.css';
import React, { useState } from 'react'

function App() {

  const questions = [
    {
      questionText: 'Когда ты первый раз написал мне?)',
      answerOptions: [
        { answerText: '19.03.2022', isCorrect: false },
        { answerText: '20.03.2022', isCorrect: false },
        { answerText: '21.03.2022', isCorrect: false },
        { answerText: '22.03.2022', isCorrect: true }
      ]
    },
    {
      questionText: 'Какой у меня любимый стикер?',
      answerOptions: [
        { answerText: 'Бесящийся кот', isCorrect: false },
        { answerText: 'Лицо ребенка со знаками ?!', isCorrect: false },
        { answerText: 'Плачущий негр', isCorrect: false },
        { answerText: 'Лапка кота *грозный топ*', isCorrect: true }
      ]
    },
    {
      questionText: 'Когда мы первый раз сходили в сквош?)',
      answerOptions: [
        { answerText: '22.03.2022', isCorrect: false },
        { answerText: '24.03.2022', isCorrect: false },
        { answerText: '25.03.2022', isCorrect: true },
        { answerText: '26.03.2022', isCorrect: false }
      ]
    },
    {
      questionText: 'Куда, "шутя", ты хотел сходить?)',
      answerOptions: [
        { answerText: 'На волейбол', isCorrect: false },
        { answerText: 'На вязание', isCorrect: true },
        { answerText: 'На выставку', isCorrect: false },
        { answerText: 'На хуй', isCorrect: false }
      ]
    },
    {
      questionText: 'Что я приготовила тебе в первый раз?)',
      answerOptions: [
        { answerText: 'Блины', isCorrect: true },
        { answerText: 'Сырники', isCorrect: false },
        { answerText: 'Суп', isCorrect: false }
      ]
    },
    {
      questionText: 'Если на 1 курсе я не ушла бы на ПОИТ, то на какой специальности осталась?)',
      answerOptions: [
        { answerText: 'Бух.учет, анализ и контроль (контролер-кассир)', isCorrect: false },
        { answerText: 'Экономика и организация производства (техник-экономист)', isCorrect: false },
        { answerText: 'Банковское дело (экономист)', isCorrect: false }
      ]
    }
  ]

  // eslint-disable-next-line no-undef
  const [currentQuestion, setCurrentquestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptionCLick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentquestion(nextQuestion)
    }
    else {
      if (parseInt(score) < 3) {
        alert('Ты че черт, охерел, заново погнал!')
        refresh()
      }
      else {
      setShowScore(true)
    }}
  }

  const refresh = () => {
    setCurrentquestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="App">
      {
        showScore
          ? <div className="section_score">
            <div>Correct answers {score} / Questions {questions.length}</div>
            <p></p>
            <div>Ну ладно, молодец, можешь открыть подарок</div>
            <button className="refresh_btn" onClick={refresh}>Start again...</button>
          </div>
          : <div className="quizz">
            <div className="question_section">
              <div className="question_count">
                <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
              </div>
              <div className="question_text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer_section">
              {questions[currentQuestion].answerOptions.map(item => (
                <button
                  onClick={() => handleAnswerOptionCLick(item.isCorrect)}
                >{item.answerText}</button>
              )
              )}
            </div>
          </div>
      }
    </div>
  );
}

export default App;
