import React, {useState} from "react";
import { connect } from "react-redux";

import { postSmurf } from "../actions";

const AddSmurf = ({ postSmurf, smurf, isPosting, error}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    postSmurf({name: name, age: age, height: `${height} cm`});
    event.target.reset();
  };

  const changeHandler = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    } else if (event.target.name === 'age') {
      setAge(event.target.value);
    } else if (event.target.name === 'height') {
      setHeight(event.target.value);
    }
  };

  if (isPosting) {
    return (
      <div>Wait a moment...</div>
    );
  } else if (smurf !== undefined && smurf !== null) {
    return (
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={name} placeholder="Name" onChange={changeHandler} /><br />
          <label htmlFor="age">Age: </label>
          <input type="text" name="age" value={age} placeholder="" onChange={changeHandler} /> years<br />
          <label htmlFor="height">Height: </label>
          <input type="text" name="height" value={height} placeholder="" onChange={changeHandler} /> cm<br />
          <button type="submit">Submit</button>
        </form>
        <p>Just posted!</p>
      </div>
    )
  } else if (error !== undefined && error !== null && error !== "") {
    return (
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={name} placeholder="Name" onChange={changeHandler} /><br />
          <label htmlFor="age">Age: </label>
          <input type="text" name="age" value={age} placeholder="" onChange={changeHandler} /> years<br />
          <label htmlFor="height">Height: </label>
          <input type="text" name="height" value={height} placeholder="" onChange={changeHandler} /> cm<br />
          <button type="submit">Submit</button>
        </form>
        <p>Error: {error}</p>
      </div>
    )
  } else {
    return (
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name} placeholder="Name" onChange={changeHandler} /><br />
        <label htmlFor="age">Age: </label>
        <input type="text" name="age" value={age} placeholder="" onChange={changeHandler} /> years<br />
        <label htmlFor="height">Height: </label>
        <input type="text" name="height" value={height} placeholder="" onChange={changeHandler} /> cm<br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}


// hook up the connect to our store
const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isPosting: state.isPosting,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { postSmurf }
)(AddSmurf);
