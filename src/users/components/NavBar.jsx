import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, AppBar, Toolbar, IconButton, Typography, Tooltip } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


export const NavBar = ({ drawerWidth = 240 }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
      setAnchorEl(e.currentTarget);
    }
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <AppBar
      position="fixed"
      
      sx={{
        width: { sm: `calc(100% - ${ drawerWidth }px)` },
        ml: { sm: `${ drawerWidth }px` }
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Usuarios
        </Typography>

        <Box component="div">
          <Tooltip title="Abrir opciones">
            <IconButton
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
          
          <Menu
            id="menu-appbar"
            anchorEl={ anchorEl }
            keepMounted
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem>Perfil</MenuItem>
            <MenuItem>Mi Cuenta</MenuItem>
            <MenuItem
              component={ RouterLink }
              to="/auth/login"
            >
              Salir
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
