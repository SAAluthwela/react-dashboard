import React from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";

import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img src={params.row.avatar} alt="" className="userListImg" />
          {params.row.user}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 180 },
  {
    field: "login_rate",
    headerName: "Login count",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a boolean and is not sortable.",
    sortable: false,
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    description: "Edit or Delete",
    sortable: false,
    width: 180,
    renderCell: (params) => {
      return (
        <React.Fragment>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>

          <DeleteOutline className="userListDelete" />
        </React.Fragment>
      );
    },
  },
];

export default function UserList() {
  return (
    <div style={{ height: 550, width: "100%" }} className="userList">
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
