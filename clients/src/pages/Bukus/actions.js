import React, { useReducer } from "react";
import firebase from "../../config/Firebase";
import Context from "./context";
import reducer from "./reducer";
import { ACTIONS } from "../../constants";

const BukuActions = props => {
  const ref = firebase.firestore().collection("buku");

  const initialState = {
    data: [],
    loading: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = () =>
    dispatch({
      type: ACTIONS.SET_LOADING
    });

  const deleteData = async oldData => {
    setLoading();
    await ref
      .doc(oldData.id)
      .delete()
      .then(() => getBuku())
      .catch(err => console.error(err));
  };

  const getBuku = async () => {
    setLoading();
    await ref.get().then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        nm_buku: doc.data().nm_buku,
        pengarang: doc.data().pengarang,
        penerbit: doc.data().penerbit,
        tarif: doc.data().tarif.toString(),
        durasi: doc.data().durasi.toDate()
      }));
      dispatch({
        type: ACTIONS.GET_BUKU,
        data: data
      });
    });
  };

  const addBuku = async newData => {
    setLoading();
    let nData = newData;
    let tarifInt = parseInt(nData.tarif);
    const newDate = new Date(nData.durasi);
    await ref
      .add({
        nm_buku: nData.nm_buku,
        pengarang: nData.pengarang,
        penerbit: nData.penerbit,
        tarif: tarifInt,
        durasi: firebase.firestore.Timestamp.fromDate(newDate)
      })
      .then(() => getBuku())
      .catch(error => console.error("Error adding to database"));
  };

  const editBuku = async (newData, oldData) => {
    setLoading();

    let nData = newData;
    let tarifInt = parseInt(nData.tarif);
    const newDate = new Date(nData.durasi);
    await ref
      .doc(oldData.id)
      .set({
        nm_buku: newData.nm_buku,
        pengarang: newData.pengarang,
        penerbit: newData.penerbit,
        tarif: tarifInt,
        durasi: firebase.firestore.Timestamp.fromDate(newDate)
      })
      .then(() => getBuku())
      .catch(err => console.error("Error"));
  };

  return (
    <Context.Provider
      value={{
        data: state.data,
        loading: state.loading,
        deleteData,
        getBuku,
        addBuku,
        editBuku
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default BukuActions;
