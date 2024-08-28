import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes} from './routes/routes.js';


export default function AppRouter() { 
  return (
    <div>     
        <Routes>            
              {routes.map((route, index) => (
                  <Route key={index + 1} path={route.path} element={route.element}/>
              ))}                                       
        </Routes>         
    </div>
    
  )
}