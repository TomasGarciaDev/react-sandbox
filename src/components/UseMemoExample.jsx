import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const sqrt = getSquareRoot(number);
  const sqrt = useMemo(() => getSquareRoot(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='number w-25'
      />

      <h2 className='my-3'>
        The sqrt of {number} is {sqrt}
      </h2>
      <button className='btn btn-primary' onClick={onClick}>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

function getSquareRoot(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  console.log("Expensive Function Called!");
  return Math.sqrt(n);
}

export default UseMemoExample;
