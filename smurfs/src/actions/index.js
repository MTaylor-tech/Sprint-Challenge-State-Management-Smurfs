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
  dispatch({ type: POSTING_SMURF_START });

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
