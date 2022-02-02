import React from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "Name", headerName: "Name", width: 250 },
  { field: "email", headerName: "Email", width: 180 },
  {
    field: "login_rate",
    headerName: "Login count",
    type: "number",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    description: "This column has a boolean and is not sortable.",
    sortable: false,
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    email: "Jon@gmail.com",
    Name: "Jon Eric",
    login_rate: 35,
    status: "active",
  },
  {
    id: 2,
    email: "Hsu@gmail.com",
    Name: "Kelly Hsu",
    login_rate: 42,
    status: "active",
  },
  {
    id: 3,
    email: "Perera@mail.com",
    Name: "Kasun Perera",
    login_rate: 45,
    status: "inactive",
  },
  {
    id: 4,
    email: "Stark@gmail.com",
    Name: "Aravinda de Silva",
    login_rate: 16,
    status: "active",
  },
  {
    id: 5,
    email: "Targaryen@netmail.com",
    Name: "Ashan Wickramasingha",
    login_rate: null,
    status: "active",
  },
  {
    id: 6,
    email: "Melisandre@unicef.com",
    Name: "Denny Robert",
    login_rate: 150,
    status: "blocked",
  },
  {
    id: 7,
    email: "Clifford@abclink.com",
    Name: "Patric Mooray",
    login_rate: 44,
    status: "inactive",
  },
  {
    id: 8,
    email: "Aluthwela@gmail.com",
    Name: "Roshan Aluthwela",
    login_rate: 36,
    status: "active",
  },
  {
    id: 9,
    email: "Roxie@mailnet.com",
    Name: "Jenny Lowranz",
    login_rate: 65,
    status: "active",
  },
];

export default function UserList() {
  return (
    <div style={{ height: 400, width: "82%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
