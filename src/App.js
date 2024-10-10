import React, {useState} from "react";
import '../src/App.css';


function Counter() {



  const [count, setCount] = useState(0);

  const add = () => (
    setCount (count+1)
  )

  const remove = () => (
    setCount (count-1)
  )




  return( 

    <>
    <div className="wrapper">
    <div className="center-flx">
      <h1>
        {count}
      </h1>
      <div>
        <button className="btn" onClick={add}>
          Add
        </button>
        <button className="btn" onClick={remove}>
          Remove
        </button>
      </div>
    </div>
    </div>
    </>

  )
}

export default Counter;