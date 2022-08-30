import React from 'react';
import './App.css';
import TopPage from './component/top';
import QuizCard from './component/QuizCard';
import QuizData from './component/QuizData';

function App() {

  const [isGame, setIsGame] = React.useState(false)
  const [quiz, setQuiz] = React.useState(QuizData)


  function handleChange() {
    setIsGame(prev=>!prev)
    console.log('game')
  }

  function selectAnswer(id) {
    setQuiz(prevQuiz=>{
      return prevQuiz.map(question=>{
        let selectedOption = question.options.find(options=>(
          options.id === id));

        if(selectedOption) {
          selectedOption.picked = !selectedOption.picked
          console.log(selectedOption.picked)
        }
        return question
      })
    })

  }
  
  // function selectAnswer(id) {
  //   setQuiz(prevQuiz=>{
  //     return prevQuiz.map(questions=>{
  //       let selectedOption = questions.options.map(option=>(
  //         {...option, picked: option.id === id ? !option.picked : false}))
        
  //       console.log(selectedOption)
  //       return {
  //         ...questions,
  //         options: selectedOption
  //       }
  //     })
  //   })

  // }


  

  const questions = quiz.map(question=>{
    return <QuizCard key={question.id} question={question.question} options={question.options
      .map(option=>(
      <p 
        key={option.id}
        className={option.picked? 'answer-picked' : ''}
        id={option.id}
        onClick={()=>selectAnswer(option.id)}
      >{option.ans}</p>
      ))} />
  })

  return (
    <div>
      {
        !isGame && 
        <TopPage handleChange={handleChange} />
      }
    

      {
        isGame &&
        <div className='quiz-page'>
          {questions}
          <button>Check answers</button>
        </div>
      }
        
    </div>
  );
}

export default App;
