import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TramitePage } from '../components/tramite/pages/TramitePage';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/tramite" element={<TramitePage />} />

        <Route path="/*" element={<Navigate to="/tramite" />} />
    </Routes>
  );
}
