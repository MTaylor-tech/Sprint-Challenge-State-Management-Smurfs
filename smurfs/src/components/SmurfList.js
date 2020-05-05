import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { getList} from "../actions";
import { connect } from "react-redux";

function SmurfList({ getList, isFetching, error, list}) {

  useEffect(()=>{
    getList();
  },[getList]);

  return (
    <div>

      <div className="smurflist">
        {list.map(smurf=>{
          return (
            <div className="smurfcard">
              <NavLink className="smurflink" to={`/smurf/${smurf.id}`}>
                <div>
                  <h2>{smurf.name}</h2>
                  <p>Age: {smurf.age}</p>
                  <p>Height: {smurf.height}</p>
                </div>
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  );
}

// hook up the connect to our store
const mapStateToProps = state => {
  return {
    list: state.list,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getList }
)(SmurfList);
