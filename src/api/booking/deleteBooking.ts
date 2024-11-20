import { DeleteBookingResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';

export default async function deleteBooking(
  token: string,
  bookingId: string,
): Promise<DeleteBookingResponse | ErrorResponse> {
  const API_URL = `${BASE_URL}/api/v1/bookings/${bookingId}`
  try {
    const response = await fetch(API_URL, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete Booking');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error delete Booking : ', error);
    return { message: 'Error delete Booking' } as ErrorResponse;
  }
}
