import { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import * as UserService from "../Service/UserService";
import { Switch, Route } from "react-router-dom";
import User from "./User";
import UsersList from "./UsersList";
import Header from "./Header";

export const UserContext = createContext(); //context api creation

function UserWrapper() {
  //set the initial values,rows,column values for every states in User
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
          console.log("id", id);
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
  const initialValues = {
    id: "",
    name: "",
    email: "",
    mobileNo: "",
    role: "",
    websiteUrl: "",
  };
  const [values, setValues] = useState(initialValues);
  const [rows, setRows] = useState([]);
  const [column] = useState(columnsList);
  const [pageSize, setPageSize] = useState(5);
  const history = useHistory();

  useEffect(() => {
    //get the all users from the api
    UserService.getUsers().then((resp) => {
      setRows(resp);
    });
  }, []);

  const deleteUser = (id) => {
    //Delete the User based on Id
    UserService.deleteUserById(id).then((resp) => {
      setRows(rows.splice(id, 1));
    });
  };

  const handleEdit = (id) => {
    //Redirect to the user edit page
    history?.push("/user/" + id);
  };

  const handleSubmit = (e, id) => {
    //save or update the user details based on Id
    e.preventDefault();
    if (id) {
      UserService.updateUser(values).then((resp) => {
        history.push("/");
      });
    } else {
      UserService.saveUser(values).then((resp) => {
        history.push("/");
      });
    }
  };

  const handleCancel = () => {
    //Cancel - redirect to the List page from User Create/Edit Page
    history.push("/");
  };

  const redirectToUser = () => {
    // Redirect to the User creation page
    history.push("/user");
  };
  return (
    //provide the all state values and setfuctions
    <UserContext.Provider
      value={{
        rows,
        setRows,
        column,
        pageSize,
        values,
        setPageSize,
        handleSubmit,
        handleCancel,
        setValues,
        redirectToUser,
      }}
    >
      <Header />
      <Switch>
        <Route exact path="/user" component={User} />{" "}
        {/*create user route path */}
        <Route path="/user/:id" component={User} /> {/*edit user route path*/}
        <Route path="/" component={UsersList} />{" "}
        {/* list of the user route path*/}
      </Switch>
    </UserContext.Provider>
  );
}

export default UserWrapper;
