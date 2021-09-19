import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import * as UserService from "../Service/UserService";
import { useHistory } from "react-router";

export default function UsersList() {
  const columnsList = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "role", headerName: "Role", width: 300 },
    { field: "mobileNo", headerName: "Mobile No", width: 150 },
    { field: "websiteUrl", headerName: "Website", width: 200 },
    {
      field: "edit",
      headerName: "Edit",
      width: 50,
      renderCell: (params) => {
        const onClick = ({ id }) => {
          handleEdit(id);
        };
        return (
          <EditIcon
            onClick={() => onClick(params)}
            style={{ color: "#1976d2", cursor: "pointer" }}
          />
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 50,
      renderCell: (params) => {
        const onClick = ({ id }) => {
          deleteUser(id);
        };
        return (
          <DeleteIcon
            onClick={() => onClick(params)}
            style={{ color: "#f50057", cursor: "pointer" }}
          />
        );
      },
    },
  ];
  const [rows, setRows] = useState([]);
  const [column] = useState(columnsList);
  const [pageSize, setPageSize] = React.useState(10);
  const history = useHistory();

  useEffect(() => {
    UserService.getUsers().then((resp) => {
      setRows(resp);
    });
  }, []);

  const deleteUser = (id) => {
    UserService.deleteUserById(id).then((resp) => {
      setRows(rows.splice(id, 1));
    });
  };

  const handleEdit = (id) => {
    history.push("/user/" + id);
  };
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={column}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div>
  );
}
