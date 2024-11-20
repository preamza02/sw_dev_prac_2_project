import { UpdateBookingResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';

export default async function updateBooking(
  token: string,
  bookingId: string,
  bookingDate: string,
  checkoutDate: string,
): Promise<UpdateBookingResponse | ErrorResponse> {
  const API_URL = `${BASE_URL}/api/v1/bookings/${bookingId}`
  try {
    // create at in YYYY-MM-DD format
    const createdAt = new Date().toISOString().split('T')[0];
    const body = JSON.stringify({ bookingDate, checkoutDate, createdAt});
    console.log('body : ', body);

    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: body,
    });

    if (!response.ok) {
      throw new Error('Failed to update Booking');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error update Booking : ', error);
    return { message: 'Error update Booking' } as ErrorResponse;
  }
}
