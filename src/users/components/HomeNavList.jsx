import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export const HomeNavList = ({ text }) => {
  return (
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                {/* TODO: COLOCAR ICONOS DINAMICOS */}
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={ text } />
        </ListItemButton>
    </ListItem>
  )
}