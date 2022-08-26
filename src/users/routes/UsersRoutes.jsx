import { Routes, Route } from 'react-router-dom';
import { UsersPage } from '../pages/UsersPage';

export const UsersRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <UsersPage /> } />
        

    </Routes>
  )
}
