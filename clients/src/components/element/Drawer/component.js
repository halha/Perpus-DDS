import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GroupIcon from "@material-ui/icons/Group";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import drawerListData from "../../../constants/drawerListData";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/HomeRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  topNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row-reverse"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#fff",
    color: "#000"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: "#444"
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    },
    backgroundColor: "#444"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  listItem: {
    color: "#fff"
  }
}));

export default function component(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logOut = e => {
    e.preventDefault();
    localStorage.setItem("Login", false);
    localStorage.removeItem("lastPath");
    window.location.reload();
  };

  const setCurrentPath = path => {
    localStorage.setItem("lastPath", path);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={1}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.topNav}>
            <AccountCircleIcon fontSize="large" />
            <Typography
              variant="h6"
              noWrap
              className={clsx(open && classes.hide)}
            >
              Perpustakaan DDS
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar} style={{ backgroundColor: "#333333" }}>
          <Typography variant="h6" noWrap className={classes.listItem}>
            Perpus DDS
          </Typography>
          <IconButton onClick={handleDrawerClose} className={classes.listItem}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawerListData.map((item, index) => {
            if (index === 0) {
              return (
                <ListItem
                  button
                  key={index}
                  onClick={e => {
                    e.preventDefault;
                    setCurrentPath(item.url);
                  }}
                  component={Link}
                  to={item.url}
                >
                  <ListItemIcon>
                    <HomeIcon className={classes.listItem} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    className={classes.listItem}
                  />
                </ListItem>
              );
            } else if (index < 4 && index > 0) {
              return (
                <ListItem
                  button
                  key={index}
                  onClick={e => {
                    e.preventDefault;
                    setCurrentPath(item.url);
                  }}
                  component={Link}
                  to={item.url}
                >
                  <ListItemIcon>
                    {index === 0 ? (
                      <BookmarkIcon className={classes.listItem} />
                    ) : (
                      <GroupIcon className={classes.listItem} />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    className={classes.listItem}
                  />
                </ListItem>
              );
            } else if (index === 4) {
              return (
                <ListItem
                  button
                  key={index}
                  onClick={e => {
                    e.preventDefault;
                    setCurrentPath(item.url);
                  }}
                  component={Link}
                  to={item.url}
                >
                  <ListItemIcon>
                    <MenuBookIcon className={classes.listItem} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    className={classes.listItem}
                  />
                </ListItem>
              );
            } else {
              return (
                <div key={index}>
                  <Divider />
                  <ListItem button onClick={e => logOut(e)}>
                    <ListItemIcon>
                      <ExitToAppIcon className={classes.listItem} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      className={classes.listItem}
                    />
                  </ListItem>
                </div>
              );
            }
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}
