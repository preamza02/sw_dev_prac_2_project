import { GetBookingResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';

export default async function getBooking(
  token: string,
  hotelId?: string,
): Promise<GetBookingResponse | ErrorResponse> {
  const API_URL = hotelId
    ? `${BASE_URL}/api/v1/bookings?hotelId=${hotelId}`
    : `${BASE_URL}/api/v1/bookings`;
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to get Booking');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error get Booking : ', error);
    return { message: 'Error get Booking' } as ErrorResponse;
  }
}
