import { Routes, Route } from 'react-router-dom';

import { AuthRoutes } from '../auth';
import { HeroesRoutes  } from '../heroes';


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/login"  element={ <AuthRoutes /> } />

            <Route path="/*"  element={ <HeroesRoutes /> } />
        </Routes>
    </>
  )
}
