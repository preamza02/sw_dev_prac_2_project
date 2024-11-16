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

export interface Hospital {
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel?: string;
  picture?: string;
}

export interface HospitalResponse {
  id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalcode: string;
  tel?: string;
  picture?: string;
}

export interface ErrorResponse {
  message: string;
}
