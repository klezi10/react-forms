import { useState } from "react";

//can use useState to validate on each keystroke

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  // const [nameIsValid, setNameIsValid] = useState(false); removed using state for nameIsValid to make it a variable instead
  //this way, one less state to manage
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  //create a new variable containing 2 variables
  const nameIsInvalid = !nameIsValid && nameIsTouched;

  function handleChange(event) {
    setName(event.target.value);
  }

  //add onBlur (lost focus) to have a function on what to do when a user touches the form
  //but doesn't enter anything, and clicks outside the form
  //should give the invalid message

  function nameInputBlurHandler() {
    setNameIsTouched(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNameIsTouched(true);

    if (!nameIsValid) {
      return;
    }
    console.log(name);
    setName("");
    setNameIsTouched(false)
  }

  const nameInputClass = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={name}
          onBlur={nameInputBlurHandler}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
