import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {  Redirect } from 'react-router-dom';

import { postSmurf, updateSmurf, getSmurfById } from "../actions";

const AddSmurf = ({ postSmurf, updateSmurf, getSmurfById, smurf, isPosting, error, toUpdate, smurfId}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [redirect, setRedirect] = useState(null);

  useEffect(()=>{
    if (toUpdate) {
      getSmurfById(smurfId);
    }
  },[smurfId, getSmurfById, toUpdate]);

  useEffect(()=>{
    if (toUpdate && smurf !== null) {
      setName(smurf.name);
      setAge(smurf.age);
      setHeight(smurf.height);
    }
  },[smurf, toUpdate]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (toUpdate) {
      smurf.name = name;
      smurf.age = age;
      smurf.height = height;
      updateSmurf(smurf);
      setRedirect(`/smurf/${smurf.id}`);
    } else {
      postSmurf({name: name, age: age, height: `${height} cm`});
      setRedirect('/');
    }
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

if (redirect !== null) {
  return (
    <Redirect to={redirect} />
  );
}

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
          {toUpdate?<button type="submit">Update</button>:<button type="submit">Submit</button>}
        </form>
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
  { postSmurf, updateSmurf, getSmurfById }
)(AddSmurf);
