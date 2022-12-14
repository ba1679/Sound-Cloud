import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
