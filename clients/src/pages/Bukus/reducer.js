import { ACTIONS } from "../../constants";

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_BUKU:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case ACTIONS.DELETE_BUKU:
      return {
        ...state,
        data: action.data
      };
    case ACTIONS.ADD_BUKU:
      return {
        ...state,
        data: action.data
      };
    case ACTIONS.EDIT_BUKU:
      return {
        ...state,
        data: action.data
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
