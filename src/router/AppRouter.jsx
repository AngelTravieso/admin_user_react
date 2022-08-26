import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { UsersRoutes } from "../users/routes/UsersRoutes";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        <Route path="/*" element={ <UsersRoutes /> } />
    

    </Routes>
  )
}
