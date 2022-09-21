import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { HeroesRoutes  } from '../heroes';
import { AuthRoutes } from '../auth';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
  return (
    <>
        <Routes>
  
            <Route path="/login"  element={ 
              <PublicRoute>
                <AuthRoutes />
              </PublicRoute>
            } />

            <Route path="/*" element={
                // <PrivateRoute>
                  <HeroesRoutes />
                // </PrivateRoute>
            } />

            {/* <Route path="/*"  element={ <HeroesRoutes /> } /> */}
        </Routes>
    </>
  )
}
