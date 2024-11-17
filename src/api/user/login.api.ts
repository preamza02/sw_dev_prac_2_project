import { LoginResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';
export default async function loginUser(
  email: string,
  password: string,
): Promise<LoginResponse | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error logging in:', error);
    return { message: 'Error logging in' } as ErrorResponse;
  }
}
