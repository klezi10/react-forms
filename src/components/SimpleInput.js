import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('')

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={handleChange} value={name} />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
