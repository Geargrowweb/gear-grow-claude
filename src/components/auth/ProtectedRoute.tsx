import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // For now, we'll simulate authentication with a simple check
  // In a real app, this would check your auth context or state
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;