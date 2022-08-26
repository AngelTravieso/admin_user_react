import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Ingresar">
      <form>
        <Grid container>
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
          

          <Grid
            item xs={ 12 }
            sx={{ mb: 1 }}
          >
          <TextField
            id="password"
            type="password"
            label="Contraseña"
            variant="outlined"
            fullWidth
          />
          </Grid>

          <Grid
            item xs={ 12 }
          >
            <Button
              variant="contained"
              component={ RouterLink }
              to="/"
              fullWidth
              sx={{ mb: 2 }}
            >
                Ingresar
            </Button>
          </Grid>

          <Grid
            container
            justifyContent="end"
          >
            <Link
              component={ RouterLink }
              underline="none"
              to="/auth/register"
            >
              Crear Cuenta
            </Link>

          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
