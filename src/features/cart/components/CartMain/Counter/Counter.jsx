
import { useState } from 'react'
import styles from'./Counter.module.css'

export function Counter() {
  const [count, setCount] = useState(1);



  return (
    <div className={styles.box} >
      
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
    <button className={ styles.musbat} onClick={InClick}>+</button>
  )
}

function Dec({ count, setCount }) {
  function DecClick() {
    if(count>1){
          setCount(count - 1);
    }
  }
  return (
      <button className={ count==1 ? styles.activeManfiy : styles.manfiy } onClick={DecClick}>-</button>
  )
}


