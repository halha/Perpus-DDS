import React, { useState } from "react"
import MaterialTable from "material-table"
import EditIcon from "@material-ui/icons/Edit"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import DeleteIcon from "@material-ui/icons/Delete"
import CheckIcon from "@material-ui/icons/Check"
import ClearIcon from "@material-ui/icons/Clear"
import { green } from "@material-ui/core/colors"

const component = props => {
  let [selectedRow, setSelectedRow] = useState(null)

  const optionConfig = {
    pageSize: 8,
    pageSizeOptions: [8, 10, 20, 30, 50, 75, 100],
    actionsColumnIndex: -1,
    rowStyle: rowData => ({
      backgroundColor:
        selectedRow && selectedRow.tableData.id === rowData.tableData.id
          ? "#EEE"
          : "#FFF"
    })
  }

  const iconsConfig = {
    Add: props => <AddCircleIcon color="primary" />,
    Edit: props => <EditIcon style={{ color: green[500] }} />,
    Delete: props => <DeleteIcon color="secondary" />,
    Check: props => <CheckIcon style={{ color: green[500] }} />,
    Clear: props => <ClearIcon color="secondary" />
  }

  const _AddHandler = (newData, resolve) => {
    props.add(newData)
    resolve()
  }
  const _EditHandler = (newData, oldData, resolve) => {
    if (oldData) {
      props.edit(newData, oldData)
    }
    resolve()
  }
  const _DeleteHandler = (oldData, resolve) => {
    props.delete(oldData)
    resolve()
  }
  return (
    <MaterialTable
      isLoading={props.loading}
      title={props.title}
      columns={props.columns}
      data={props.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            _AddHandler(newData, resolve)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            _EditHandler(newData, oldData, resolve)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            _DeleteHandler(oldData, resolve)
          })
      }}
      onRowClick={(evt, selectedRow) =>
        setSelectedRow((selectedRow = selectedRow))
      }
      options={optionConfig}
      icons={iconsConfig}
    />
  )
}

export default component
