import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { isSignIn } from "../../services/actions/Authaction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  container: {
    width: 400,
  },
});

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isSignIn(state));
   
    // history.push('/dashboard')
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  return (
    <Container className={classes.container}>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        LoginPage
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          label="Email_id"
          variant="outlined"
          color="secondary"
          id="email"
          onChange={handleChange}
          fullWidth
          required
          // error={titleError}
        />
        <TextField
          className={classes.field}
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          id="password"
          onChange={handleChange}
          fullWidth
          required
          // error={titleError}
        />
        <Button
          // className={classes.btn}
          // onClick={() => console.log('You Click Me')}
          type="submit"
          variant="contained"
          color="secondary"
          // color='primary'
          // startIcon={<SendIcon/>}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
