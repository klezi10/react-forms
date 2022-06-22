import { useState } from "react";

//can use useState to validate on each keystroke

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  //not right starting with nameIsValid set to true as it's not true,
  //so adding a new state confirming if a user wrote in the input already or not
  const [nameIsTouched, setNameIsTouched] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  //add onBlur to have a function on what to do when a user touches the form
  //but doesn't enter anything, and clicks outside the form
  //should give the invalid message

  function nameInputBlurHandler() {
    setNameIsTouched(true);
    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNameIsTouched(true);

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(name);
    setName("");
  }

  //create a new variable containing 2 variables
  const nameIsInvalid = !nameIsValid && nameIsTouched;

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
