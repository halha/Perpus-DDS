import { ACTIONS } from "../../constants";
export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ACTIONS.GET_NAMA_PETUGAS:
      return {
        ...state,
        nama: action.data,
        loading: false
      };
    case ACTIONS.GET_PETUGAS:
      return {
        ...state,
        petugas: action.data,
        loading: false
      };
    default:
      return state;
  }
};
