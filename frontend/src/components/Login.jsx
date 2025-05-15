import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  useMediaQuery,
  useTheme,
  Alert,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const leftImage = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80'; // Use the same image for consistency

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5500/api/users/login', formData);
      // Save token/user info as needed
      localStorage.setItem('token', res.data.token);
      // Redirect to home/dashboard
      navigate('/home'); // Change '/home' to your actual home route
    } catch (err) {
      setError(
        err.response?.data?.msg || 'Login failed. Please check your credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container sx={{ minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
      {/* Left Side - Image and Overlay */}
      <Grid
        item
        xs={0}
        md={6}
        sx={{
          display: { xs: 'none', md: 'flex' },
          position: 'relative',
          width: '50vw',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${leftImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 56, 90, 0.55)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box sx={{ maxWidth: 350, width: '100%', px: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              internship.com
            </Typography>
            <Box sx={{ mt: 8 }}>
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                welcome back,
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontSize: 18, lineHeight: 1.5 }}>
                Log in to access your dashboard and manage your internship applications.
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                internship sphere<br />CEO, GDA.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Right Side - Login Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#fafafa',
          width: { xs: '100vw', md: '50vw' },
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            mx: 'auto',
            bgcolor: 'white',
            p: { xs: 2, md: 4 },
            borderRadius: 3,
            boxShadow: { xs: 'none', md: '0 2px 16px rgba(0,0,0,0.04)' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 700, mb: 1, alignSelf: 'flex-start' }}>
            Login to your account
          </Typography>
          <Typography variant="body2" sx={{ color: '#888', mb: 3, alignSelf: 'flex-start' }}>
            Enter your credentials to continue
          </Typography>
          {error && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
              {error}
            </Alert>
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              variant="standard"
              InputProps={{
                disableUnderline: false,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                disableUnderline: false,
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: 320,
                  maxWidth: '100%',
                  bgcolor: 'black',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: 16,
                  borderRadius: 2,
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#222' },
                }}
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'LOGIN'}
              </Button>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="caption" sx={{ color: '#888' }}>
                Don't have an account?{' '}
                <Link
                  component="button"
                  onClick={() => navigate('/signup')}
                  sx={{ color: '#2196f3', fontWeight: 500, fontSize: 14 }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login; 