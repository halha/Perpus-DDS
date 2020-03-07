import React, { useContext, useEffect } from "react";
import Table from "../../components/element/Table";
import peminjamContext from "./context";
import { tableColumn } from "../../constants/Table";

const component = () => {
  const context = useContext(peminjamContext);
  const petugasContextes = useContext(petugasContext);
  const {
    peminjam,
    getPinjam,
    loading,
    getNamaAnggota,
    nama_anggota,
    editPeminjam,
    addPeminjam,
    deletePeminjam
  } = context;
  const { petugas, getPetugas, getPetugasNama, nama } = petugasContextes;

  useEffect(() => {
    getPinjam(), getPetugas(), getPetugasNama(), getNamaAnggota();
  }, []);
  const column = [
    {
      title: "No Pinjam",
      field: "no_pinjam",
      editable: "never",
      type: "numeric",
      defaultSort: "asc"
    },
    {
      title: "Nama Anggota",
      field: "nama_anggota",
      lookup: nama_anggota
    },
    {
      title: "Nama Petugas",
      field: "nama_petugas",
      lookup: nama
    },
    {
      title: "Tanggal Pinjam",
      field: "tgl_pinjam",
      type: "datetime"
    }
  ];
  return (
    <Table
      title="Peminjam"
      data={peminjam}
      loading={loading}
      columns={column}
      edit={editPeminjam}
      add={addPeminjam}
      delete={deletePeminjam}
    />
  );
};

export default component;
