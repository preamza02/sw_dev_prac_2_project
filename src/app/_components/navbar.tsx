'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function NavBar() {
  const { isLogin, currentUser, setIsLogin, setCurrentUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    // Clear the authentication cookie
    deleteCookie('my_token');

    // Update the Auth Context
    setIsLogin(false);
    setCurrentUser(null);

    // Redirect to the login page
    router.push('/login');
  };

  return (
    <nav className="flex h-[60px] flex-row items-center bg-white px-4 text-white">
      {/* Logo */}
      <Link href="/" className="flex h-full items-center">
        <Image
          src="/logo.png"
          height={90}
          width={300}
          style={{ width: 'auto', height: '100%', userSelect: 'none', pointerEvents: 'none' }}
          alt="logo"
          priority={true}
        />
      </Link>

      {/* Right-side user actions */}
      <div className="ml-auto flex items-center space-x-4">
        {isLogin ? (
          <>
            {/* Display the first letter of the user's name */}
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-black underline hover:text-gray-300"
            >
              Logout
            </button>
            <div className="flex h-[45px] w-[45px] select-none items-center justify-center rounded-full bg-gray-600">
              <h1 className="text-xl font-bold">{currentUser?.name?.charAt(0).toUpperCase()}</h1>
              {/* <p>{currentUser?.name}</p> */}
            </div>

            {/* Logout as a styled link */}
          </>
        ) : (
          // Login link
          <Link
            href="/login"
            className="text-sm font-medium text-black underline hover:text-gray-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
