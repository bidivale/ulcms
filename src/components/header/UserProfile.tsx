import * as React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

// MUI imports
import { IconButton, Menu, MenuItem, ListItemIcon, Typography, Divider } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';



const UserProfile = () => {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAvatarMenu = () => {
    setAnchorEl(null);
  };

  // ----------------- sign out started ----------//

  // State for the confirmation dialog visibility
  const [openSignOutDialog, setOpenSignOutDialog] = React.useState(false);

  // Function to open the dialog
  const handleOpenSignOutDialog = () => {
    setOpenSignOutDialog(true);
  };

  // Function to close the dialog
  const handleCloseSignOutDialog = () => {
    setOpenSignOutDialog(false);
  };




  return (
    <>

      {/* Avatar */}
      <IconButton color="inherit" onClick={handleAvatarClick}>
        <Avatar
        sx={{ width: 24, height: 24 }}
        />
      </IconButton>

    
    </>
  );
};

export default UserProfile;