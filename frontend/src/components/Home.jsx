import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Paper } from '@mui/material';

const schools = [
  {
    title: 'Software',
    subtitle: 'School of software dev.',
    description: 'Lorem ipsum dolor sit amet, dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Software',
    subtitle: 'School of software dev.',
    description: 'Lorem ipsum dolor sit amet, dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Software',
    subtitle: 'School of software dev.',
    description: 'Lorem ipsum dolor sit amet, dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Software',
    subtitle: 'School of software dev.',
    description: 'Lorem ipsum dolor sit amet, dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Software',
    subtitle: 'School of software dev.',
    description: 'Lorem ipsum dolor sit amet, dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Software',
    subtitle: 'School of software dev.',
    description: 'Lorem ipsum dolor sit amet, dummy text of the printing and typesetting industry.',
  },
];

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f9f9f9', border: '6px solid #2196f3', p: 0 }}>
      {/* Navbar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: '#2196f3', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Logo
          </Typography>
          <Box>
            <Button sx={{ color: '#2196f3', fontWeight: 500, fontSize: 16, textTransform: 'none' }}>Home</Button>
            <Button sx={{ color: '#2196f3', fontWeight: 700, fontSize: 16, textTransform: 'none', borderBottom: '2px solid #2196f3', borderRadius: 0 }}>Dashboard</Button>
            <Button sx={{ color: '#2196f3', fontWeight: 500, fontSize: 16, textTransform: 'none' }}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Content */}
      <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 6, px: 2 }}>
        <Typography variant="h5" sx={{ color: '#2196f3', fontWeight: 600, mb: 4 }}>
          Choose Your School
        </Typography>
        <Grid container spacing={3}>
          {schools.map((school, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper elevation={1} sx={{ p: 2, borderRadius: 2, minHeight: 120 }}>
                <Typography variant="subtitle1" sx={{ color: '#2196f3', fontWeight: 600 }}>
                  {school.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#90caf9', fontWeight: 500, mb: 1 }}>
                  {school.subtitle}
                </Typography>
                <Typography variant="body2" sx={{ color: '#888' }}>
                  {school.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home; 