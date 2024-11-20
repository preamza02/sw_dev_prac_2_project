import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '@/app/_components/navbar';
import { mockAuthContextValue, MockAuthProvider } from './mocks/MockAuthContext';
import { deleteCookie } from 'cookies-next';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('cookies-next', () => ({
  deleteCookie: jest.fn(),
}));

describe('NavBar Component', () => {
  // const mockPush = jest.fn();

  // beforeEach(() => {
  //   (useRouter as jest.Mock).mockReturnValue({
  //     push: mockPush,
  //   });
  // });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the logo correctly', () => {
    render(<NavBar />);

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  // it('renders login link when user is not logged in', () => {
  //   render(
  //     <MockAuthProvider value={{ ...mockAuthContextValue, isLogin: false }}>
  //       <NavBar />
  //     </MockAuthProvider>,
  //   );

  //   const loginLink = screen.getByText('Login');
  //   expect(loginLink).toBeInTheDocument();
  //   expect(loginLink).toHaveAttribute('href', '/login');
  // });

  // it('renders user initials and logout button when user is logged in', () => {
  //   render(
  //     <MockAuthProvider value={{ ...mockAuthContextValue, isLogin: true }}>
  //       <NavBar />
  //     </MockAuthProvider>,
  //   );

  //   const logoutButton = screen.getByText('Logout');
  //   const userInitials = screen.getByText('T'); // Assuming name is "Test User"

  //   expect(logoutButton).toBeInTheDocument();
  //   expect(userInitials).toBeInTheDocument();
  // });

  // it('handles logout correctly', () => {
  //   const mockSetIsLogin = jest.fn();
  //   const mockSetCurrentUser = jest.fn();

  //   render(
  //     <MockAuthProvider
  //       value={{
  //         ...mockAuthContextValue,
  //         isLogin: true,
  //         setIsLogin: mockSetIsLogin,
  //         setCurrentUser: mockSetCurrentUser,
  //       }}
  //     >
  //       <NavBar />
  //     </MockAuthProvider>,
  //   );

  //   const logoutButton = screen.getByText('Logout');
  //   fireEvent.click(logoutButton);

  //   expect(deleteCookie).toHaveBeenCalledWith('my_token'); // Ensure the cookie is deleted
  //   expect(mockSetIsLogin).toHaveBeenCalledWith(false); // Ensure login state is updated
  //   expect(mockSetCurrentUser).toHaveBeenCalledWith(null); // Ensure current user is cleared
  //   // expect(mockPush).toHaveBeenCalledWith('/login'); // Ensure redirect to login
  // });
});
