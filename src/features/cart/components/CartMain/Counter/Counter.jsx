
import { useState } from 'react'
import './Counter.css'

export function Counter() {
  const [count, setCount] = useState(1);



  return (
    <div className='box'>
      
        <Dec count={count} setCount={setCount} />
        <h6>{count}</h6>
        <Inc count={count} setCount={setCount} />

    </div>
  )
}

function Inc({ count, setCount }) {
  function InClick() {
    setCount(count + 1);

  }
  return (
    <button  className='musbat' onClick={InClick}>+</button>
  )
}

function Dec({ count, setCount }) {
  function DecClick() {
    if(count>1){
          setCount(count - 1);
    }
  }
  return (
      <button className={ count==1 ? "active-manfiy" : "manfiy" } onClick={DecClick}>-</button>
  )
}


