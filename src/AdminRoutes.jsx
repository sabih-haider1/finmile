import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AddContent from './pages/AddContent';
import EditContent from './pages/EditContent';

/**
 * Admin Routes Component
 * 
 * This component defines all routes for the admin backend system.
 * Include this in your main App.jsx or routing configuration.
 * 
 * Example usage in App.jsx:
 * - Wrap this component with BrowserRouter
 * - Add route: <Route path="/admin/*" element={<AdminRoutes />} />
 * - Access via: /admin/login, /admin/dashboard, /admin/add, /admin/edit/:id
 */
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="add" element={<AddContent />} />
      <Route path="edit/:id" element={<EditContent />} />
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
