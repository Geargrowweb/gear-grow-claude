import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  // For now, we'll simulate admin check
  // In a real app, this would check user role from auth context
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isAdmin = localStorage.getItem('userRole') === 'admin';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;