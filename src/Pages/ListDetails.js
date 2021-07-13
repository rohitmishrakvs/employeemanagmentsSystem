import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core";

import DetailList from "./DETAILS/DetailList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f4f4f4",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f4f4f4",
    border: "",
    marginLeft: 0,
    padding: 5,

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },

    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));
const ListDetails = ({data,label}) => {
  // const employee = useSelector((state) => state.employees);
  console.log(data, "employeedetails");

  const classes = useStyles();
  const [page, setPage] = useState(1);

  // const [loading, setLoading] = useState(false);
  const [employeeperpage, setEmployeeperpage] = useState(5);

  const count = Math.ceil((data.length)/employeeperpage)
 
  const lastPageIndex = page * employeeperpage;
  const firstEmployeeIndex = lastPageIndex - employeeperpage;

  const currepages = data.slice(firstEmployeeIndex, lastPageIndex);

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        {label}
      </Typography>
      <DetailList data={currepages} />

      <Pagination
        count={count}
        color="secondary"
        className={classes.pagination}
        onChange={(event, value) => {
          setPage(value);
        }}
      />
    </Container>
  );
};
export default ListDetails;
