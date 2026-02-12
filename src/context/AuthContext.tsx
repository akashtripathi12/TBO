'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'agent' | 'guest';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  eventId?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

// Mock credentials (will be replaced with API calls)
const mockAgentCredentials = {
  email: 'agent@tbo.com',
  password: 'agent123',
  name: 'TBO Agent',
  id: 'agent-1',
};

const mockGuestCredentials = [
  {
    email: 'rajesh.sharma@example.com',
    password: 'guest123',
    name: 'Rajesh Sharma',
    id: 'hg-123',
    eventId: '1',
  },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('tbo_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('tbo_user');
      }
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    // Simulate async authentication
    await new Promise(resolve => setTimeout(resolve, 500));

    if (role === 'agent') {
      if (email === mockAgentCredentials.email && password === mockAgentCredentials.password) {
        const authenticatedUser: User = {
          id: mockAgentCredentials.id,
          name: mockAgentCredentials.name,
          email: mockAgentCredentials.email,
          role: 'agent',
        };
        setUser(authenticatedUser);
        setIsAuthenticated(true);
        localStorage.setItem('tbo_user', JSON.stringify(authenticatedUser));
        return true;
      }
    } else if (role === 'guest') {
      const guestCred = mockGuestCredentials.find(g => g.email === email);
      if (guestCred && password === guestCred.password) {
        const authenticatedUser: User = {
          id: guestCred.id,
          name: guestCred.name,
          email: guestCred.email,
          role: 'guest',
          eventId: guestCred.eventId,
        };
        setUser(authenticatedUser);
        setIsAuthenticated(true);
        localStorage.setItem('tbo_user', JSON.stringify(authenticatedUser));
        return true;
      }
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('tbo_user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
