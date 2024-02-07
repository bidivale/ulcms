import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Box,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



interface Category {
  id: string;
  topCategoryRef: string;
  categoryName:string;
  childCategories: [{
    childCategoryName: string;
    childCategoryDisplayOrder: number;
    productGroupRef: string
  }]

};

interface TopCategory {
  id: string,
  topCategoryName: string;
  topCategoryCode: String;
  displayOrder: number

}

interface MobileDrawerProps {
  open: boolean;
  closeLeftDrawer: () => void;
  categories: Category[];
  topCategories: TopCategory[];
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, closeLeftDrawer, topCategories, categories }) => {
  
  // to keep the top category that is selected or clicked
  const [selectedTopCategoryId, setSelectedTopCategoryId] = useState<any>(null);

 
  // Function to handle click on a category
  const handleTopCategoryClick = (topCategory: TopCategory) => {
    setSelectedTopCategoryId(topCategory.id);
  };

  // Function to handle click on the back button in the subcategories page
  const handleBackButtonClick = () => {
    setSelectedTopCategoryId(null);
  };

  return (
    <Drawer anchor="left" open={open} onClose={closeLeftDrawer} sx={{ width: '400px' }}>
      {/* Drawer Content */}
      <Box sx={{ p: 2 }}>

        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          
          {/* image */}
          <Box
            component="img"
            sx={{ display: 'flex', height: 40 }}
          /> 

          {/* global-ai-hub title */}
          <Typography variant="h6">unilecams</Typography>

        </Box>

        {/* Divider */}
        <Divider />

        {/* Top Categories */}
        {!selectedTopCategoryId && (
          <List>
            {topCategories?.map((topCategory: any, index: any) => (
              <React.Fragment key={index}>
                <ListItemButton onClick={() => handleTopCategoryClick(topCategory)}>
                  <ListItemText primary={topCategory.topCategoryName} />
                </ListItemButton>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        )}
    
        {/* Categories and child categories Page */}
        {selectedTopCategoryId && (
          <Box>
            {/* Back Button */}
            <IconButton onClick={handleBackButtonClick} sx={{ mb: 2 }}>
              <ArrowBackIcon />
            </IconButton>
    
            {categories?.map((category: Category) => {
              if (category.topCategoryRef === selectedTopCategoryId) {
                return (
                  <Box key={category.id}>
                    {/* Category Heading */}
                    <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
                      {category.categoryName}
                    </Typography>
    
                    {/* Child Categories - clicking which will redirect to the product list page */}
                    <Grid container spacing={1}>
                      {category.childCategories?.map((childCategory: any, index: any) => (
                        <Grid item xs={6} sm={6} md={4} key={index}>
                          <ListItemButton 
                            component={NavLink}
                            // go to product list page - taking the product group id
                            // passing the categpry name and child category name as the additionall parameters
                            to={`/product-list/${childCategory.productGroupRef}?categoryName=${category.categoryName}&childCategoryName=${childCategory.childCategoryName}`}
                            // Close the left drawer
                            onClick={closeLeftDrawer}
                          >
                            <Typography variant='subtitle2'>{childCategory.childCategoryName}</Typography>
                          </ListItemButton>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                );
              }
              return null;
            })}
          </Box>
        )}
        </Box>
    
    </Drawer>

  );
};

export default MobileDrawer;
