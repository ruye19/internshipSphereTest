import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Paper } from '@mui/material';

const schools = [
  { title: 'Software', subtitle: 'School of software dev', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { title: 'Chemical', subtitle: 'School of software dev', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { title: 'Mechanical', subtitle: 'School of software dev', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { title: 'Biomedical', subtitle: 'School of software dev', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { title: 'Civil', subtitle: 'School of software dev', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { title: 'Electrical', subtitle: 'School of software dev', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
];

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#ffffff' }}>
      {/* Navbar */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: '#333', boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Logo</Typography>
          <Box>
            <Button sx={{ color: '#333', fontWeight: 500, fontSize: 16, textTransform: 'none' }}>Home</Button>
            <Button sx={{ color: '#2196f3', fontWeight: 'bold', fontSize: 16, textTransform: 'none', borderBottom: '3px solid #2196f3', borderRadius: 0, mx: 2 }}>
              Dashboard
            </Button>
            <Button sx={{ color: '#333', fontWeight: 500, fontSize: 16, textTransform: 'none' }}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 6, px: 3 }}>
        <Typography variant="h4" align="center" sx={{ color: '#1E88E5', fontWeight: 600, mb: 4 }}>
          Choose Your School
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {schools.map((school, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 2, minHeight: 150 }}>
                <Typography variant="h6" sx={{ color: '#1E88E5', fontWeight: 600 }}>
                  {school.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#64b5f6', mb: 1 }}>
                  {school.subtitle}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
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
