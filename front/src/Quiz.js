import { useState } from "react";
import axios from "axios";
import './quiz.css'
import { useContext,useEffect } from "react";
import { finalresult } from "./App";
import { useNavigate } from "react-router-dom";

  
  function Quiz() {
    const nevigate = useNavigate()
    const { right, setright, wrong, setwrong } = useContext(finalresult)
  
    const [questions, setquestions] = useState([])
    const [index, setindex] = useState(0)
    const [time, setTime] = useState(10)
    const [show, setshow] = useState(false)
    const [inputvalue, setinputvalue] = useState('')
  


    // Fetch questions from the server when the component mounts
    useEffect(() => {
      axios.get('http://localhost:8080/quiz')
        .then((result) => {
          setquestions(result.data)
        })
        .catch(error => {
          console.error("Error fetching quiz questions:", error);
        });
    }, []);


  
    function handelnext(e) {
      e.preventDefault()
      
      if (toString(crntQues.answer) === toString(inputvalue)) {
        setright(right + 1)
      } else {
        setwrong(wrong + 1);
      }
      
      // Check if there are more questions
      if (index < questions.length - 1) {
        setindex(index + 1)
        setTime(10)
        setinputvalue('') // Clear the selected option
        
      } else {
        // Navigate to the final page after answering all questions
        setTimeout(() => {
          nevigate('/final')
        }, 3000)
      }
      console.log(inputvalue,crntQues.answer)
    }
  

    let crntQues = questions[index]
  
   
  return (
    <>
      <div className="connect">
        <div className="quiz" style={{ display: (show ? "none" : "block") }}>
          <h2>Welcome to quiz app!</h2>

          <button onClick={e => { setshow(true) }} >Start</button>
        </div>


        {
          crntQues && <div className="quescontainer" style={{ display: (show ? "block" : "none") }} >
            {/* <p>{time}</p> */}
            <h2>{crntQues.question}</h2>
            <div className="list">
              <div className="lab1">
                <input type="radio" name="opt" value={crntQues.option[0]} id="first" onChange={e => { setinputvalue(e.target.value) }} />
                <label for="first">{crntQues.option[0]}</label><br />
              </div>

              <div className="lab1">
                <input type="radio" name="opt" value={crntQues.option[1]} id="second" onChange={e => { setinputvalue(e.target.value) }} />
                <label for="second">{crntQues.option[1]}</label><br />
              </div>

              <div className="lab1">
                <input type="radio" name="opt" value={crntQues.option[2]} id="three" onChange={e => { setinputvalue(e.target.value) }} />
                <label for="three">{crntQues.option[2]}</label><br />
              </div>

              <div className="lab1">
                <input type="radio" name="opt" value={crntQues.option[3]} id='four' onChange={e => { setinputvalue(e.target.value) }} />
                <label for="four">{crntQues.option[3]}</label><br />
              </div>
            </div>

            <button onClick={handelnext}>next</button>
          </div>
        }

      </div>
    </>
  )
}
export default Quiz