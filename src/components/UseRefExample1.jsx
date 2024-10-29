import { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "HELLO THERE";
    inputRef.current.style.backgroundColor = "red";
    paraRef.current.innerText = "Goodbye";
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
      <p ref={paraRef} onClick={() => inputRef.current.focus()}>
        Hello
      </p>
    </div>
  );
}

export default UseRefExample;
