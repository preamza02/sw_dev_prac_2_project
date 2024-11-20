'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';
import getUserProfile from '@/api/user/getUserProfile.api';
import { User, UserResponse } from '@/api/interfaces';
import { getCookie } from 'cookies-next';

interface TAuthContext {
  currentUser: User | null;
  isLogin: boolean;
  setCurrentUser: (currentEntity: User | null) => void;
  setIsLogin: (isLogin: boolean) => void;
}

export const AuthContext = createContext<TAuthContext>({
  currentUser: null,
  setCurrentUser: () => {},
  isLogin: false,
  setIsLogin: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    if (getCookie('my_token')) {
      setIsLogin(true);
      console.log('isLogin', isLogin);
    }
  }, []);

  useEffect(() => {
    if (!isLogin) {
      return;
    }
    getUserProfile(getCookie('my_token') as string).then((Response) => {
      console.log('Response', Response);
      if ('message' in Response) {
        return;
      }
      console.log('setting current user');
      setCurrentUser((Response as UserResponse).data);
    });
  }, [isLogin]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
