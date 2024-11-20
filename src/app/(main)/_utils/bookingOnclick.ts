import createBooking from '@/api/booking/createBooking';
import { getCookie } from 'cookies-next';
export default async function bookingOnclick(
  checkInDate: Date,
  checkOutDate: Date,
  hotel_id: string,
) {
  if (checkOutDate <= checkInDate) {
    alert('Check out date must be later than check in date');
    return;
  }
  const token = getCookie('my_token');
  if (!token) {
    return;
  }
  return createBooking(token as string, hotel_id, {
    bookingDate: checkInDate.toISOString().split('T')[0],
    checkoutDate: checkOutDate.toISOString().split('T')[0],
    createdAt: new Date().toISOString().split('T')[0],
  });
}
