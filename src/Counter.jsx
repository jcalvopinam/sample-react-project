import { useState } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const handleDecrement = () => {
    setCount(count - inputValue);
    console.log('val:' + inputValue + 'counter: ' + count);
  };

  const handleIncrement = () => {
    setCount(count + inputValue);
    console.log('val:' + inputValue + 'counter: ' + count);
  };

  const handleReset = () => {
    setCount(0);
    setInputValue(1);
  }

  const handleChange = (event) => {
    const val = event.target.value;

    if (!isNaN(val)) {
      setInputValue(parseFloat(val));
    } 

    console.log('val:' + inputValue);
  }

  return (
    <>
      <div>Counter</div>
      <h1>
        <button onClick={() => handleDecrement()}>
          - 1
        </button>

        {count}

        <button onClick={() => handleIncrement()}>
          + 1
        </button>
      </h1>

      <input
        type="text"
        placeholder="initial counter"
        value={inputValue}
        onChange={handleChange}
      />

      <button onClick={() => handleReset()}>
        reset
      </button>
    </>
  )
}
