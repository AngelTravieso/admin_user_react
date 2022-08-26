import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';


import AccountCircle from '@mui/icons-material/AccountCircle';

import { drawerOption } from '../data/drawer_options';
import { HomeNavList } from './HomeNavList';

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth }, flexShrink: { sm: 0 }
        }}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >

        <Toolbar>
          <AccountCircle sx={{ mr: 1 }} />
          <Typography variant="h6" noWrap component="div">Angel Travieso</Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            drawerOption.map(text => (
              <HomeNavList key={ text } text={ text } />
            ))
          }
        </List>
        
        </Drawer>

    </Box>
  )
}
