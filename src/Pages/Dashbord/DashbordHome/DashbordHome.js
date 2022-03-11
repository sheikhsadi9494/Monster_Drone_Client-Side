import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const drawerWidth = 240;

function DashbordHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, user} = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
      {/* <Typography sx={{color: 'white'}} variant="h6" noWrap component="div">
            MonsterDrone
          </Typography> */}
      </Toolbar>
      <Divider />
      <List>
        <Box>

            <>
              <Link style={{textDecoration: 'none', color: 'black'}} to="/dashbord"> 
              <ListItem button>
                My Orders
              <ListItemText />
              </ListItem>
              </Link>

              <Link style={{textDecoration: 'none', color: 'black'}} to="pay">
              <ListItem button>
               Make Payment
              <ListItemText />
              </ListItem>  
              </Link>

              <Link style={{textDecoration: 'none', color: 'black'}} to="review">
              <ListItem button>
               Review
              <ListItemText />
              </ListItem>  
              </Link>

            </>

           { admin &&
            <>

              <Link style={{textDecoration: 'none', color: 'black'}} to="makeAdmin">
              <ListItem button>
               Make Admin
              <ListItemText />
              </ListItem>
              </Link>

              <Link style={{textDecoration: 'none', color: 'black'}} to="addProduct">
              <ListItem button>
               Add Product
              <ListItemText />
              </ListItem>
              </Link>
  
              <Link style={{textDecoration: 'none', color: 'black'}} to="manageAllOrders">
              <ListItem button>
               Manage All Orders
              <ListItemText />
              </ListItem>
              </Link>
  
              <Link style={{textDecoration: 'none', color: 'black'}} to="managePorducts">
              <ListItem button>
               Manage Products
              <ListItemText />
              </ListItem>
              </Link>

            </>}
     
        </Box>
        <Link style={{textDecoration: 'none', color: 'black'}} to="/">
        <ListItem button>
               Back To Home
              <ListItemText />
              </ListItem>  
        </Link>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'black'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MonsterDrone
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          <main>
            <Outlet />
          </main>
        </Box>
      </Box>
    </Box>
  );
}

DashbordHome.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashbordHome;
