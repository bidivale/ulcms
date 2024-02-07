import * as React from 'react';
import { useState, useRef } from 'react';

// mui imports
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';

// mui icons
import MenuIcon from '@mui/icons-material/Menu';



// own component imports
import MobileDrawer from './MobileDrawer';
import Logo from '../Logo';
import Search from './Search';
import UserProfile from './UserProfile';



const Header: React.FC = () => {

  // to keep the top categories fetching from database
  const [topCategories, setTopCategories] = useState<any>(null);


  // to keep the categories fetching from database
  const [categories, setCategories] = useState<any>(null);

 
  
  // variable to determine whether the left drawer is open
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);

  // small screen defination
  // const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

  // large screen defination
  const isLargeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));


  // to make the category popover and search popover open below the AppBar
  const appBarRef = useRef(null);


  // left drawer open and close 
  const toggleLeftDrawer = () => {
    setIsLeftDrawerOpen((prevState) => !prevState);
  };


  
  
  return (
    <React.Fragment>
      
      {/* left drawer for small, medium screen - not for large screen */}
      {!isLargeScreen && 
      <MobileDrawer
        open={isLeftDrawerOpen}
        closeLeftDrawer={toggleLeftDrawer}
        categories={categories}
        topCategories={topCategories}
      />
      }

      
      {/* AppBar starts here */}
      <AppBar position="sticky" sx={{minHeight: 50}} ref={appBarRef}>
        <Toolbar variant='dense'>

          {/* the left drawer icon visible only on small screen clicking which opens the drawer */}
          <IconButton color="inherit" onClick={toggleLeftDrawer} sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' }, mr: 1 }}>
            <MenuIcon />
          </IconButton>

          {/* mobileLogo for small, medium screen - not for large screen */}
          {!isLargeScreen && 
            <Logo />
          }

          {/* common grid container for logo, topCategories, search icon, avatar, more menu icon */}
          <Grid container 
            spacing={2}
            sx={{
              display: 'flex',
              // place all the items in center in large screen, and at the right end till medium screen
              justifyContent: { xs: 'flex-end', sm: 'flex-end', md: 'flex-end', lg: 'center' }
            }}
          >

            {/* logo - for large screen*/}
            {isLargeScreen && 
            <Grid item>
              <Logo />
            </Grid>
            }

            

            {/* top categories and category popover for large screen */}
            {/* {isLargeScreen && 
            <TopCategoriesMenuDesktop 
              appBarRef={appBarRef}
              topCategories={topCategories}
              categories={categories}
            /> 
            } */}

                

            {/* search icon and search popover- viible in all screen size*/}
            <Grid item>
              <Search appBarRef={appBarRef} />
            </Grid>


            {/* Avatar and avatar popover */}
            <Grid item>
              <UserProfile />
            </Grid>


            {/* More icon - visible in all screen size */}
            {/* <Grid item>
              <MoreMenu />
            </Grid> */}

          </Grid>   {/* Common Grid container ends */}
         
          
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;