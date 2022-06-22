import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameIsInvalid = !nameIsValid && nameIsTouched;

  let regex = /^\S+@\S+\.\S+$/;
  const emailCheck = regex.test(email) === true

  const emailIsValid = email.trim() !== "" && emailCheck;
  const emailIsInvalid = !emailIsValid && emailIsTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function nameInputBlurHandler() {
    setNameIsTouched(true);
  }

  function emailInputBlurHandler() {
    setEmailIsTouched(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNameIsTouched(true);
    setEmailIsTouched(true);

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log(name, email);
    setName("");
    setEmail("");
    setNameIsTouched(false);
    setEmailIsTouched(false);
  }

  const nameInputClass = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          value={name}
          onBlur={nameInputBlurHandler}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          onChange={handleEmailChange}
          value={email}
          onBlur={emailInputBlurHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
