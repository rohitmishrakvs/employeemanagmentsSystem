import React from "react";
import { Grid,Box,makeStyles } from "@material-ui/core";
import Controls from "../components/Controls/Control";
import { useForm, Form } from "../components/useForm";
import { useDispatch } from "react-redux";
import { setEmployee } from "../services/actions/employeeAction";

const useStyles = makeStyles({
    formdiv :{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    }
    ,
    FormBox :{
        paddingLeft: 50,
        paddingBottom: 10,
        // width:800
    }
})


const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const options = [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

const initialFValues = {
  name: "",
  email: "",
  mobile: "",
  address: "",
  gender: "male",
  department: "",
  hireDate: "",
};

const CreateEmployee = () => {
    const classes = useStyles()
  const dispatch = useDispatch();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? "": "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("department" in fieldValues)
      temp.department =
        fieldValues.department.length != 0 ? "" : "This field is required.";
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
      // employeeService.insertEmployee(values)
      console.log(values);
      dispatch(setEmployee(values));
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
      <h2>New Employee -:</h2>
    <Form onSubmit={handleSubmit}>
        
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="Full Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
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
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="department"
            label="Department"
            value={values.department}
            onChange={handleInputChange}
            options={options}
            // {employeeService.getDepartmentCollection()}
            error={errors.department}
          />
          <Controls.Input
                        name="hireDate"
                        label="Hire Date"
                        type="date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
    </Box>
    </div>
  );
};

export default CreateEmployee;

 