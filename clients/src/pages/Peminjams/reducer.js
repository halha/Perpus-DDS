import { ACTIONS } from "../../constants";

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_NAMA_ANGGOTA:
      return {
        ...state,
        loading: false,
        nama: action.data
      };
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ACTIONS.GET_PEMINJAM:
      return {
        ...state,
        peminjam: action.data,
        loading: false
      };
    default:
      return state;
  }
};
