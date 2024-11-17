import { Booking, BookingRequest, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';

export default async function createBooking(
  token: string,
  hotelId: string,
  BookingRequest: BookingRequest,
): Promise<Booking | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/Hotels/${hotelId}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(BookingRequest),
    });

    if (response.status == 400) {
      const data = await response.json();
      if (data.message === 'Sorry, You can only book up to 3 nights.') {
        alert(data.message);
      }
      return { message: 'Bad Request' } as ErrorResponse;
    }

    if (!response.ok) {
      throw new Error('Failed to create Booking');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating Booking : ', error);
    return { message: 'Error creating Booking' } as ErrorResponse;
  }
}
