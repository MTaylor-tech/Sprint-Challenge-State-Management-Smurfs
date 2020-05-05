import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { useParams, NavLink, Redirect} from "react-router-dom";

import { getSmurfById, deleteSmurf } from "../actions";

const Smurf = ({ getSmurfById, deleteSmurf, smurf, isFetching, error}) => {
  const [redirect, setRedirect] = useState(null);
  let {smurfId} = useParams();

  useEffect(()=>{
    getSmurfById(smurfId);
  },[smurfId, getSmurfById]);

  const getRidOfTheBugger = () => {
    deleteSmurf(smurf);
    setRedirect('/');
  }

  if (redirect !== null) {
    return (
      <Redirect to={redirect} />
    );
  }

  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={()=>getSmurfById(smurfId)}>Try again</button>
      </div>
    );

  if (isFetching) {
    return <h2>Fetching your smurf now :)</h2>;
  } else if (smurf!==undefined && smurf!==null) {
    return (
      <div className="center">
        <div className="smurfcard">
          <h2>{smurf.name}</h2>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
          <NavLink className='editlink' to={`/update/${smurf.id}`}>Update</NavLink><br />
          <button className='editlink' onClick={getRidOfTheBugger}>Delete</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Something went wrong</p>
        <button onClick={()=>getSmurfById(smurfId)}>Try again</button>
      </div>
    );
  }
};

// hook up the connect to our store
const mapStateToProps = state => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfById, deleteSmurf }
)(Smurf);
