import { Routes, Route } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth/pages"
import { AuthRouter } from "../auth/routes/AuthRouter"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRouter /> } />
    

    </Routes>
  )
}
