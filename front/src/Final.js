import React from 'react'
import { useContext } from 'react'
import { finalresult } from './App'


function Final() {

    const {right,wrong} = useContext(finalresult);
  return (
    <div className='final'>
       <h2>final result</h2>
       <p>cong you have successfully complete this quiz and your score is : {right} out of 4</p>
      {(wrong) && <p>you have given {wrong} wrong answers</p> } 
        </div>
  )
}

export default Final          