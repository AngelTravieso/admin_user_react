import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
        <form>
          <Grid container spacing={ 2 }>
            <Grid
              item xs={ 12 }
              sx={{ mb: 1 }}
            >
            <TextField
              id="user"
              label="Usuario"
              variant="outlined"
              fullWidth
            />
            </Grid>
            

            <Grid item xs={ 12 } sx={{ mb: 1 }} >
              <TextField
                id="email"
                type="email"
                label="Email"
                variant="outlined"
                autoComplete="off"
                fullWidth
              />
            </Grid>


            <Grid item xs={ 6 } sx={{ mb: 1 }} >
              <TextField
                id="password"
                type="password"
                label="Contraseña"
                variant="outlined"
                fullWidth
              />
            </Grid>


            <Grid item xs={ 6 } sx={{ mb: 1 }} >
              <TextField
                id="password"
                type="password"
                label="Confirmar Contraseña"
                variant="outlined"
                fullWidth
              />
            </Grid>
            

            <Grid item xs={ 12 } >
              <Button
                variant="contained"
                fullWidth
                sx={{ mb: 2 }}
              >
                  Crear Cuenta
              </Button>
            </Grid>

            <Grid
              container
              justifyContent="end"
            >
              <Link
                component={ RouterLink }
                underline="none"
                to="/auth/login"
              >
                Ingresar
              </Link>

            </Grid>
          </Grid>
      </form>
    </AuthLayout>
  )
}
