import { HotelResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';

export default async function getHotels(): Promise<HotelResponse | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/Hotels`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Hotels');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Hotels:', error);
    return { message: 'Error fetching Hotels' } as ErrorResponse;
  }
}
