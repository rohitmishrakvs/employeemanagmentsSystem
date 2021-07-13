import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Avatar } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#3f51b5",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    date: {
      flexGrow: 1,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const menuItems = [
    {
      text: "DashBoard",
      icon: <DashboardIcon color="secondary" />,
      path: "/dashboard",
    },
    {
      text: "Create Employee",
      icon: <AddCircleIcon color="secondary" />,
      path: "/createemployee",
    },
    {
      text: "Create Department",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/createdeparment",
    },
    {
      text: "Chart",
      icon: <ShowChartIcon color="secondary" />,
      path: "/chart",
    },
  ];

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.date}>
            Today is {new Date().toDateString()}
          </Typography>
          <Typography>
            {/* MANAGMENT */}
            <a
              onClick={() => {
                history.push("/");
              }}
            >
              Login
            </a>
            {/* <a onClick={<Redirect to={"/loginpage"}><LoginPage/></Redirect>}>Login</a> */}
          </Typography>
          {/* Change it with Admin first two letters of name */}
          <Avatar src="/logo192.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              onClick={() => history.push(item.path)}
              key={item.text}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <br />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};
export default Layout;
