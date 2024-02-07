import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

const Logo = () => {
  return (
    <NavLink to="/" style={{ textDecoration: 'none' }}>
      <Typography
        variant="h5"
        sx={{
            fontFamily: 'Audiowide, sans-serif',
                    display: 'flex',
                    // color: '#d2c2fd',
                    // color: '#b39afd',
                    color: 'white',
                    fontSize: '2 rem',
                    alignItems: 'center',
                    paddingTop: '4px',
                    textTransform: 'lowercase',
                    mr: 1
                  }}
                >
                  unilecams
                </Typography>
              </NavLink>
  )
}

export default Logo