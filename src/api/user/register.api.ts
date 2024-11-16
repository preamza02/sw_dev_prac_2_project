import { User } from '../interfaces';
import { ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';
export default async function registerUser(user: User): Promise<User | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to register user');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    return { message: 'error register' } as ErrorResponse;
  }
}
