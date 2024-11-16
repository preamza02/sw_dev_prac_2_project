import { Hotel, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';
export default async function createHotel(Hotel: Hotel): Promise<Hotel | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/Hotels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Hotel),
    });

    if (!response.ok) {
      throw new Error('Failed to create Hotel');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating Hotel:', error);
    return { message: 'Error creating Hotel' } as ErrorResponse;
  }
}
