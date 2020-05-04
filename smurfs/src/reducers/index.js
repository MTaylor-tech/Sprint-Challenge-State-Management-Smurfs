import {
  POSTING_SMURF_START,
  POSTING_SMURF_SUCCESS,
  POSTING_SMURF_FAILURE,
  FETCHING_SMURF_START,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILURE,
  FETCHING_LIST_START,
  FETCHING_LIST_SUCCESS,
  FETCHING_LIST_FAILURE,
} from "../actions";

const initialState = {
  page: 1,
  smurf_id: null,
  smurf: null,
  isFetching: false,
  isPosting: false,
  error: "",
  list: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTING_SMURF_START:
      return {
        ...state,
        isPosting: true
      };
    case POSTING_SMURF_SUCCESS:
      return {
        ...state,
        isPosting: false,
        smurf: action.payload
      };
    case POSTING_SMURF_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    case FETCHING_SMURF_START:
      return {
        ...state,
        smurf_id: action.payload,
        isFetching: true
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurf: action.payload
      };
    case FETCHING_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case FETCHING_LIST_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload
      };
    case FETCHING_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
