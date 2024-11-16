'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { User } from '@/api/gen';
import { UserApi } from '@/api/gen';
import { getCookie } from 'cookies-next';

interface TAuthContext {
  currentUser: User | null;
  isLogin: boolean;
  isAdmin: boolean;
  setCurrentUser: (currentEntity: User | null) => void;
  setIsLogin: (isLogin: boolean) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}

export const AuthContext = createContext<TAuthContext>({
  currentUser: null,
  setCurrentUser: () => {},
  isLogin: false,
  setIsLogin: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
});

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const userApi = new UserApi();

  useEffect(() => {
    const token = getCookie('token');
    if (token !== undefined) {
      userApi.authMeGet(undefined, token as string).then((Response) => {
        setCurrentUser(Response.data ?? null);
        if (Response.success) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, isLogin, setIsLogin, isAdmin, setIsAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
