import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts & Pages
import PublicLayout from './components/PublicLayout';
import Home from './components/Home';
import GalleryPage from './components/GalleryPage';

// Admin Components
import Login from './admin/Login';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import NewsManager from './admin/NewsManager';
import GalleryManager from './admin/GalleryManager';
import ContentManager from './admin/ContentManager';
import DepartmentManager from './admin/DepartmentManager';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="news" element={<NewsManager />} />
        <Route path="gallery" element={<GalleryManager />} />
        <Route path="departments" element={<DepartmentManager />} />
        <Route path="content" element={<ContentManager />} />
      </Route>
    </Routes>
  );
}

export default App;
