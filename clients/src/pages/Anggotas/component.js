import React, { useContext, useEffect } from "react";
import Table from "../../components/element/Table";
import anggotaContext from "./context";
import { tableColumn } from "../../constants/Table";

const component = () => {
  const Anggota = useContext(anggotaContext);
  const {
    data,
    getAnggota,
    addAnggota,
    editAnggota,
    deleteData,
    loading
  } = Anggota;
  useEffect(() => {
    getAnggota();
  }, []);
  if (data) {
    return (
      <Table
        title="Anggota"
        columns={tableColumn.AnggotaColumn}
        data={data}
        delete={deleteData}
        add={addAnggota}
        edit={editAnggota}
        loading={loading}
      />
    );
  }
  return <div></div>;
};

export default component;
