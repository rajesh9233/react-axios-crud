import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { UserContext } from "./UserWrapper";

export default function UsersList() {
  const userContext = useContext(UserContext);
  const { rows, column, pageSize, setPageSize } = userContext; // get all the provider from context using useContext
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
