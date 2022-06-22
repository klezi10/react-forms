import { useState } from "react";

//can use useState to validate on each keystroke

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log(name);
    setName("");
  }

  const nameInputClass = nameIsValid ? "form-control" : "form-control invalid"

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={handleChange} value={name} />
        {!nameIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
