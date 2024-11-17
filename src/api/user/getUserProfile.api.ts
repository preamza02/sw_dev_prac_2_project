import { UserResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';
export default async function getUserProfile(token: string): Promise<UserResponse | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return { message: 'Error fetching user' } as ErrorResponse;
  }
}
