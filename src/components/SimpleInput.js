import { useRef } from "react";

//can use Ref when collecting form data and validating later all at once

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    nameInputRef.current.value = ''
    //not good to manipulate the DOM this way
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
