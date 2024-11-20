// interfaces.ts
export interface UserResponse {
  success: boolean;
  data: User;
}

export interface User {
  name: string;
  email: string;
  tel: string;
  role?: string;
  password: string;
  createdAt?: string;
}

export interface LoginResponse {
  token: string; // Assuming the token is returned after successful login
}

export interface HotelResponse {
  success: boolean;
  count: number;
  pagination: object;
  data: Hotel[];
}

export interface Hotel {
  _id?: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel?: string;
  picture?: string;
  __v?: number;
  id?: string;
  isBooked?: boolean;
}

export interface ErrorResponse {
  message: string;
}

export interface RegisterErrorResponse {
  success: boolean;
}

export interface BookingRequest {
  bookingDate: string;
  checkoutDate: string;
  createdAt: string;
}

export interface Booking {
  bookingDate: string;
  checkoutDate: string;
  user: string;
  hotel: hotelBooking;
  createdAt: string;
  _id: string;
}

export interface hotelBooking {
  _id: string;
  name: string;
  address: string;
  tel: string;
  id: string;
}
export interface GetBookingResponse {
  success: boolean;
  count: number;
  data: Booking[];
}

export interface DeleteBookingResponse {
  success: boolean;
  data: object | object[];
}

export interface UpdateBookingResponse {
  success: boolean;
  data: object | object[];
}
