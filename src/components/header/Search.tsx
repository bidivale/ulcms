import * as React from 'react';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

// mui imports
import { IconButton, Popover, TextField, List, ListItem, ListItemText, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';



interface Product {
  id: string;
  productName: string;
  productNameToLowercase?: string;
  tags?: string[];
}; 

const Search = ({appBarRef}: any) => {

  // variable to determine whether the search popover is opened at large screen
  const [isSearchOpened, setIsSearchOpened] = useState<boolean>(false);

   // open search popover
   const handleOpenSearchPopover = (event: any) => {
    // setSearchAnchorEl(event.currentTarget);
    setIsSearchOpened(true);
  };

   // close search popover
   const handleCloseSearchPopover = () => {
    // setSearchAnchorEl(null);
    setIsSearchOpened(false);
  };

  const navigate = useNavigate();

  // to keep the search inputs
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  // to keep the fetched products - tat matches the search input
  const [matchedProducts, setMatchedProducts] = useState<Product[]>([]);

  // fetch the products, and apply the search logic, populate the matchedProducts


  // manage when clicked on a product on search result
 


  return (
    <>
    {/* search icon */}
    <IconButton color="inherit" onClick={handleOpenSearchPopover}>
      <SearchIcon />
    </IconButton>

    <Popover
      open={isSearchOpened}
      anchorEl={appBarRef.current}
      onClose={handleCloseSearchPopover}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPopover-paper': {
            width: '100%',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
          },
        }}
    >

      {/* Close Icon */}
      <IconButton
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1, // Make sure the close icon appears above the content
          color: 'grey', // Set the color of the close icon
          mr: 2
        }}
        onClick={handleCloseSearchPopover}
      >
        <CloseIcon />
      </IconButton>

            
      {/* search input field */}
      <TextField
        // label="Search"
        placeholder='Search here'
        variant="standard"
        fullWidth
        value={searchInputValue}
        onChange={e => setSearchInputValue(e.target.value.toLowerCase())}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
      />

      {/* search results */}
      <List>
        {matchedProducts.map((product, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={product.productName} 
              onClick={() =>  {
                handleCloseSearchPopover();
                navigate(`product/${product.id}`)
              }}
              sx={{cursor: 'pointer'}}
            />
          </ListItem>
        ))}
      </List>
    </Popover>
      
    </>
  )
}

export default Search