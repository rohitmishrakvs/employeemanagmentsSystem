import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import Controls from "../components/Controls/Control";
import { useForm, Form } from "../components/useForm";
import { useDispatch } from "react-redux";
import { addDepartmet } from "../services/actions/departmentAction";

const useStyles = makeStyles({
  formdiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  FormBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
  },
});

const initialFValues = {
  name: "",
  department_email: "",
  mobile: "",
  department_manager_name: "",
  createdAt: "",
  employeeCount: 0,
};

const CreateDepartment = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("department_email" in fieldValues)
      temp.department_email = /$^|.+@.+..+/.test(fieldValues.department_email)? "": "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("department_manager_name" in fieldValues)
      temp.department_manager_name =fieldValues.department_manager_name.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(values);
      dispatch(addDepartmet(values));
      resetForm();
    }
  };

  return (
    <div className={classes.formdiv}>
      <Box
        boxShadow={5}
        bgcolor="background.paper"
        m={1}
        p={1}
        className={classes.FormBox}
      >
        
        <Form autoComplete="off" onSubmit={handleSubmit}>
        <h2>New Department-:</h2>
          <Grid container >
            <Grid item xs={6}>
              <Controls.Input
                name="name"
                label="Department Name"
                value={values.name}
                onChange={handleInputChange}
                error={errors.name}
              />
              <Controls.Input
                label="Department Manager"
                name="department_manager_name"
                value={values.department_manager_name}
                onChange={handleInputChange}
                error={errors.department_manager_name}
              /> 
               <Controls.Input
                label="Department Email"
                name="department_email"
                value={values.department_email}
                onChange={handleInputChange}
                error={errors.department_email}
              />
              <Controls.Input
                label="Mobile"
                name="mobile"
                value={values.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
              />
              <Controls.Input
                label="address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
                error={errors.address}
              />
              </Grid>
              <Grid item xs={6}>
              <Controls.Input
                name="employeeCount"
                label="Max Employee"
                type="number"
                value={values.employeeCount}
                onChange={handleInputChange}
              /> 
              <Controls.Input
                name="createdAt"
                label="Created Date"
                type="date"
                value={values.createdAt}
                onChange={handleInputChange}
              />
              <div>
                <Controls.Button type="submit" text="Submit" />
                <Controls.Button
                  text="Reset"
                  color="default"
                  onClick={resetForm}
                />
              </div>
            </Grid>
          </Grid>
        </Form>
      </Box>
    </div>
  );
};

export default CreateDepartment;
