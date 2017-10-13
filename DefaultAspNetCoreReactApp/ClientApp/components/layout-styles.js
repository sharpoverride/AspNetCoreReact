const drawerWidth = 240;

export default function layoutStyle(theme) {
    return {
    root: {
      width: "100%",
      height: "100%",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      zIndex: 1,
      overflow: "hidden"
    },
    appFrame: {
      position: "relative",
      display: "flex",
      width: "100%",
      height: "100%"
    },
    appBar: {
      position: "absolute",
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: "none"
    },
    drawerPaper: {
      position: "relative",
      height: "100vh",
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    content: {
      width: "100%",
      marginLeft: -drawerWidth,
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      height: "calc(100% - 56px)",
      marginTop: 56,
      [theme.breakpoints.up("sm")]: {
        content: {
          height: "calc(100% - 64px)",
          marginTop: 64
        }
      }
    },
    contentShift: {
      marginLeft: 0,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  };
}