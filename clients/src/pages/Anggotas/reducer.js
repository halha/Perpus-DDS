import { ACTIONS } from "../../constants";

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ACTIONS.GET_ANGGOTA:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case ACTIONS.DELETE_ANGGOTA:
      return {
        ...state,
        data: action.data
      };
    case ACTIONS.ADD_ANGGOTA:
      return {
        ...state,
        data: action.data
      };
    case ACTIONS.EDIT_ANGGOTA:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
