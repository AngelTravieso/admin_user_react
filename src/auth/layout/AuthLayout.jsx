import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ 
          minHeight: '100vh',
          backgroundColor: 'primary.main'
         }}
      >
        <Grid
          item
          sx={{
            width: { sm: 475 },
            backgroundColor: 'white',
            borderRadius: 2,
            padding: 3,
          }}  
        >

          <Typography variant='h5' sx={{ mb: 2 }}>{ title }</Typography>

          { children }

        </Grid>
    </Grid>
  )
}