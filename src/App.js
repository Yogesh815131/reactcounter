import React, {useState} from "react";


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='container my-5'>
        <div className='card text-center my-5'>
          <div className='card-body'>
            <h1>Counter App</h1>
            <h2 className="my-5">{count}</h2>
            <botton className="btn btn-success mx-3" onClick={()=> setCount(count + 1)}>Increment</botton>
            <botton className="btn btn-danger mx-3" onClick={ ()=> setCount(count - 1)} disabled={count === 0}>Decrement</botton>
            <botton className="btn btn-secondary mx-3" onClick={()=> setCount(0)} disabled={count === 0}>Decrement</botton>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
