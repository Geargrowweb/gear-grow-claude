import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      const userRole = localStorage.getItem('userRole');
      
      if (isAuthenticated === 'true' && userRole) {
        // Mock user data
        setUser({
          id: '1',
          name: userRole === 'admin' ? 'Admin User' : 'Customer User',
          email: userRole === 'admin' ? 'admin@geargrow.com' : 'customer@example.com',
          role: userRole as 'customer' | 'admin'
        });
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (email.includes('admin')) {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', 'admin');
          setUser({
            id: '1',
            name: 'Admin User',
            email: email,
            role: 'admin'
          });
        } else {
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('userRole', 'customer');
          setUser({
            id: '2',
            name: 'Customer User',
            email: email,
            role: 'customer'
          });
        }
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    setUser(null);
  };

  const register = async (data: any) => {
    // Simulate API call
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Registration data:', data);
        resolve();
      }, 1000);
    });
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};