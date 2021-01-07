import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { ReducerContext, StateContext } from "../App";
import { Types } from "../StateManagement/Reducers/Reducer";
import Layout from "../wrappers/Layout";
import { useHistory } from "react-router-dom";
const Profile: React.FC = () => {
  const context = useContext(StateContext);
  const dispatch = useContext(ReducerContext);
  const history = useHistory();
  useEffect(() => {
    if (!context.authenticated) {
      history.push("/login");
    }
  });
  const formik = useFormik({
    initialValues: {
      name: context.name,
      lastName: context.lastName,
      melliCode: context.melliCode,
      profileImage: context.profileImage,
    },
    onSubmit: (values) => {
      dispatch({ type: Types.AditionalInfo, payload: values });
    },
  });
  return (
    <Layout title="Profile">
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <FormControl fullWidth>
          <TextField
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            label="name"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            onChange={formik.handleChange}
            id="lastName"
            value={formik.values.lastName}
            label="last name"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            onChange={formik.handleChange}
            id="melliCode"
            value={formik.values.melliCode}
            label="melliCode"
          />
        </FormControl>
        <FormControl fullWidth>
          <input
            type="file"
            name="file"
            onChange={(event) => {
              formik.setFieldValue(
                "profileImage",
                event.target.files &&
                  URL.createObjectURL(event.target.files[0]),
              );
            }}
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </Layout>
  );
};
export default Profile;
