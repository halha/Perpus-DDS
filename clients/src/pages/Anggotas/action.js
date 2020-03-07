import React, { useReducer } from "react";
import firebase from "../../config/Firebase";
import Context from "./context";
import reducer from "./reducer";
import { ACTIONS } from "../../constants";

const AnggotaState = props => {
  const ref = firebase.firestore().collection("anggota");

  const initialState = {
    data: [],
    loading: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () => dispatch({ type: ACTIONS.SET_LOADING });

  const deleteData = async oldData => {
    setLoading();
    await ref
      .doc(oldData.id)
      .delete()
      .then(() => getAnggota())
      .catch(err => console.error(err));
  };

  const getAnggota = async () => {
    setLoading();
    await ref.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        kode_anggota: doc.data().kode_anggota,
        nama_anggota: doc.data().nama_anggota,
        alamat: doc.data().alamat,
        telepon: doc.data().telepon
      }));
      dispatch({
        type: ACTIONS.GET_ANGGOTA,
        data: data
      });
    });
  };

  const addAnggota = async newData => {
    let nData = newData;
    setLoading();
    await ref
      .add({
        kode_anggota: `AG${state.data.length}`,
        nama_anggota: nData.nama_anggota,
        alamat: nData.alamat,
        telepon: nData.telepon
      })
      .then(() => getAnggota())
      .catch(error => console.error("Error adding to database"));
  };

  const editAnggota = async (newData, oldData) => {
    setLoading();
    await ref
      .doc(oldData.id)
      .set({
        kode_anggota: newData.kode_anggota,
        nama_anggota: newData.nama_anggota,
        alamat: newData.alamat,
        telepon: newData.telepon
      })
      .then(() => getAnggota())
      .catch(err => console.error("Error"));
  };

  return (
    <Context.Provider
      value={{
        data: state.data,
        loading: state.loading,
        deleteData,
        getAnggota,
        addAnggota,
        editAnggota
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AnggotaState;
