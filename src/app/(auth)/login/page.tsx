'use client';
import { setCookie } from 'cookies-next';
import AuthContainer from '../_component/authContainer';
import LinkButton from '@/app/_components/linkButton';
import ActionButton from '@/app/_components/actionButton';
import AuthFormElement from '../_component/authFormElement';
import loginUser from '@/api/user/login.api';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';
import { LoginResponse } from '@/api/interfaces';
import React from 'react';

export default function LoginHomePage() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setIsLogin } = useContext(AuthContext);

  const loginOnclick = async () => {
    try {
      const response = await loginUser(email, password);
      console.log('Login response:', response, (response as LoginResponse).token);

      await setCookie('my_token', (response as LoginResponse).token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
      setIsLogin(true);

      // Navigate to root path after login
      router.push('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };
  return (
    <AuthContainer>
      <div className="flex flex-col space-y-1">
        <h1 className="text-3xl font-bold">Login</h1>
        <h3 className="text-base">Prove your loyalty to Golden Armor by Enter Yor Holy account</h3>
      </div>
      <hr />
      <div className="space-y-2">
        <AuthFormElement
          title="Email"
          value={email}
          setValue={setEmail}
          type="email"
        ></AuthFormElement>
        <AuthFormElement
          title="Password"
          value={password}
          setValue={setPassword}
          type="password"
        ></AuthFormElement>
      </div>
      <div className="mx-auto w-4/5 space-y-2">
        <ActionButton
          onClick={loginOnclick}
          title="Login"
          bgColor="#4190ED"
          textColor="#FFFFFF"
        ></ActionButton>
        <LinkButton
          link="register"
          title="Register"
          bgColor="#FFFFFF"
          textColor="#000000"
        ></LinkButton>
      </div>
    </AuthContainer>
  );
}
