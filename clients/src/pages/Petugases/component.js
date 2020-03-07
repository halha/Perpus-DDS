import React, { useEffect, useContext } from "react";
import Table from "../../components/element/Table";
import petugasContext from "./context";
import { tableColumn } from "../../constants/Table";

const component = () => {
  const Petugas = useContext(petugasContext);
  const {
    petugas,
    getPetugas,
    deletePetugas,
    loading,
    editPetugas,
    addPetugas
  } = Petugas;
  useEffect(() => {
    getPetugas();
  }, []);
  return (
    <div>
      <Table
        title="Petugas"
        data={petugas}
        columns={tableColumn.PetugasColumn}
        loading={loading}
        delete={deletePetugas}
        add={addPetugas}
        edit={editPetugas}
      />
    </div>
  );
};

export default component;
