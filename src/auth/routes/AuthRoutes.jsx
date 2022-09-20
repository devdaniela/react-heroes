import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages';


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <LoginPage /> } />
    </Routes>
  )
}
