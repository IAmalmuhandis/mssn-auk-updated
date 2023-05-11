import React from 'react';
import { styled } from '@mui/system';
import { Grid, Typography, TextField, Button, Paper } from '@mui/material';
import aukLogo from './assets/auk-logo.png';
import mssnLogo from './assets/mssn-auk.png';

const useStyles = styled('div')({
  flexGrow: 1,
  height: '100vh',
  background: 'linear-gradient(45deg, #333652, skyblue)',
  overflow: 'hidden',
});

const LogoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  marginBottom: '1rem',
  '@media (max-width: 600px)': {
    display: 'none',
  },
});

const LogoLeft = styled('img')({
  height: '10rem',
});

const LogoRight = styled('img')({
  height: '10rem',
});

const StyledPaper = styled(Paper)({
  padding: '1rem',
  margin: 'auto',
  maxWidth: 500,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add a box shadow
});

const StyledTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#fff',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
});

const StyledSubtitle = styled(Typography)({
  color: '#333',
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .MuiTextField-root': {
    margin: '0.5rem',
    width: '100%',
  },
});

const StyledPaymentButton = styled(Button)({
  marginTop: '1rem',
  backgroundColor: '#f50057',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#c51162',
  },
});

function App() {
  return (
    <div className={useStyles}>
      <LogoContainer>
        <LogoLeft src={aukLogo} alt="Left Logo" />
        <LogoRight src={mssnLogo} alt="Right Logo" />
      </LogoContainer>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
        <Grid item>
          <StyledPaper>
            <StyledTitle variant="h4">
              Welcome to MSSN Portal
            </StyledTitle>
            <StyledSubtitle variant="h6" gutterBottom>
              Make Payment and Verify your Registration
            </StyledSubtitle>
            <StyledForm>
<TextField label="Full Name" variant="outlined" />
<TextField label="Registration Number" variant="outlined" />
<TextField label="Email" variant="outlined" />
<TextField label="Phone Number" variant="outlined" />
<TextField
  label="Level"
  variant="outlined"
  select
  SelectProps={{
    native: true,
  }}
>
  <option value="100">100</option>
  <option value="200">200</option>
  <option value="300">300</option>
  <option value="400">400</option>
</TextField>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
    Registration Price:
  </Typography>
  <Typography variant="body1" style={{ backgroundColor: '#f50057', color: '#fff', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
    N500
  </Typography>
</div>


<StyledPaymentButton variant="contained">
  Make Payment
</StyledPaymentButton>
</StyledForm>
          </StyledPaper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

