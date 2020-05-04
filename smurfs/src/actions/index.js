import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const FETCHING_LIST_START = "FETCHING_LIST_START";
export const FETCHING_LIST_SUCCESS = "FETCHING_LIST_SUCCESS";
export const FETCHING_LIST_FAILURE = "FETCHING_LIST_FAILURE";
export const POSTING_SMURF_START = "POSTING_SMURF_START";
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS";
export const POSTING_SMURF_FAILURE = "POSTING_SMURF_FAILURE";
export const UPDATING_SMURF_START = "UPDATING_SMURF_START";
export const UPDATING_SMURF_SUCCESS = "UPDATING_SMURF_SUCCESS";
export const UPDATING_SMURF_FAILURE = "UPDATING_SMURF_FAILURE";
export const DELETING_SMURF_START = "DELETING_SMURF_START";
export const DELETING_SMURF_SUCCESS = "DELETING_SMURF_SUCCESS";
export const DELETING_SMURF_FAILURE = "DELETING_SMURF_FAILURE";

const apiServer = `http://localhost:3333/smurfs`;

export const getSmurfById = (smurfId) => async dispatch => {
  dispatch({ type: FETCHING_SMURF_START, payload: smurfId });

  // implement the code calling actions for .then and .catch
  axios
    .get(`${apiServer}/${smurfId}`)
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_SMURF_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};

export const getList = () => async dispatch => {
  dispatch({ type: FETCHING_LIST_START });
  console.log(`Fetching smurfs`);
  axios
    .get(`${apiServer}`)
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_LIST_FAILURE,
        payload: `${err.statusText} with response code ${err.status}, ${err.json}`
      });
    });
};

export const postSmurf = (smurf) => async dispatch => {
  dispatch({ type: POSTING_SMURF_START, payload: smurf });

  axios
    .post(`${apiServer}`, smurf)
    .then(res => {
      console.log(res);

      dispatch({ type: POSTING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      console.log(err.json);

      dispatch({
        type: POSTING_SMURF_FAILURE,
        payload: `${err.statusText} with response code ${err.status}, ${err}`
      });
    });
}

export const updateSmurf = (smurf) => async dispatch => {
  dispatch({ type: UPDATING_SMURF_START, payload: smurf });

  axios
    .put(`${apiServer}/${smurf.id}`, smurf)
    .then(res => {
      console.log(res);

      dispatch({ type: UPDATING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      console.log(err.json);

      dispatch({
        type: UPDATING_SMURF_FAILURE,
        payload: `${err.statusText} with response code ${err.status}, ${err}`
      });
    });
}

export const deleteSmurf = (smurf) => async dispatch => {
  dispatch({ type: DELETING_SMURF_START, payload: smurf });

  axios
    .delete(`${apiServer}/${smurf.id}`)
    .then(res => {
      console.log(res);

      dispatch({ type: DELETING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      console.log(err.json);

      dispatch({
        type: DELETING_SMURF_FAILURE,
        payload: `${err.statusText} with response code ${err.status}, ${err}`
      });
    });
}
