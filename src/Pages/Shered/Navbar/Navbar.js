import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ListItem, ListItemText } from "@mui/material";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { user, logOut } = useAuth();

  return (
    <AppBar
      sx={{ backgroundColor: "transparent", color: "black", boxShadow: 2 }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: {
                  xs: "none",
                  md: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "50px",
                },
              }}
            >
              MonsterDrone
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* <MenuItem onClick={handleCloseNavMenu}> */}
              <Link style={{ textDecoration: "none" }} to="/expolre">
                <ListItem sx={{color: "black"}} button>
                  Expolre
                  <ListItemText />
                </ListItem>
              </Link>

              {user.email && (
                <Link style={{ textDecoration: "none" }} to="/dashbord">
                  <ListItem sx={{color: "black"}} button>
                  Dashbord
                  <ListItemText />
                </ListItem>
                </Link>
              )}
              {/* </MenuItem> */}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              // border: '2px solid black',
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/expolre">
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Expolre
              </Button>
            </Link>
            {user.email && (
              <Link style={{ textDecoration: "none" }} to="/dashbord">
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  dashbord
                </Button>
              </Link>
            )}
          </Box>

          <Box sx={{ mx: 1 }}>
            {user.email ? (
              <Button style={{ color: "black" }} onClick={logOut}>
                logout
              </Button>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button style={{ color: "black" }}>Login</Button>
              </Link>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Typography textAlign="center">{user.displayName}</Typography>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
