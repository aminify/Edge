import NotFound from 'pages/NotFound';
import Station from 'pages/Station';
import StationsList from 'pages/StationsList';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import routes from 'routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={routes.STATIONS_LIST} replace />} />
        <Route path={routes.STATIONS_LIST} element={<StationsList />} />
        <Route path={routes.STATION} element={<Station />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
