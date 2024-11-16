import { HotelResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';
export default async function getHotelById(id: string): Promise<HotelResponse | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/Hotels/${id}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Hotel by ID');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Hotel by ID:', error);
    return { message: 'fetching Hotel by ID' } as ErrorResponse;
  }
}
