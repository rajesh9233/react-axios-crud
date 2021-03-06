import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import * as UserService from "../Service/UserService";
import { useHistory, useParams } from "react-router";

export default function User() {
  const { id } = useParams();

  const history = useHistory();
  const initialValues = {
    id: "",
    name: "",
    email: "",
    mobileNo: "",
    role: "",
    websiteUrl: "",
  };
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    UserService.getUserById(id).then((resp) => setValues(resp));
  }, [id]);

  const handleSubmit = (e) => {
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
    history.push("/");
  };

  return (
    <form className="user-section" onSubmit={(e) => handleSubmit(e)}>
      <div className="user-form">
        <TextField
          type="text"
          required
          variant="outlined"
          label="Name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />
        <TextField
          type="email"
          required
          variant="outlined"
          label="Email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <TextField
          type="text"
          required
          variant="outlined"
          label="Role"
          value={values.role}
          onChange={(e) => setValues({ ...values, role: e.target.value })}
        />
        <TextField
          type="tel"
          required
          variant="outlined"
          label="Mobile No"
          value={values.mobileNo}
          onChange={(e) => setValues({ ...values, mobileNo: e.target.value })}
        />
        <TextField
          type="url"
          required
          variant="outlined"
          label="Website"
          value={values.websiteUrl}
          onChange={(e) => setValues({ ...values, websiteUrl: e.target.value })}
        />

        <div className="user-btn-row">
          <Button
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => handleCancel()}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {id ? "Update" : "Save"}
          </Button>
        </div>
      </div>
    </form>
  );
}
