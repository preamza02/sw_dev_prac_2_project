import { AuthContext } from '@/context/AuthContext';
import React from 'react';

export const mockAuthContextValue = {
  currentUser: {
    name: 'Test User',
    email: 'test@example.com',
    tel: '1234567890',
    role: 'user', // Optional field
    password: 'securepassword', // In practice, never expose passwords in real applications
    createdAt: '2024-11-20T00:00:00Z', // Optional field
  },
  isLogin: true,
  setCurrentUser: jest.fn(),
  setIsLogin: jest.fn(),
};

export function MockAuthProvider({
  children,
  value = mockAuthContextValue, // Default to mockAuthContextValue if no value is passed
}: {
  children: React.ReactNode;
  value?: typeof mockAuthContextValue; // Accept value as a prop
}) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
