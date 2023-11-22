import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const LazyLoginPage = lazy(() => import('./views/LoginPage/LoginPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><LazyLoginPage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;