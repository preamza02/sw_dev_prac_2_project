import { HospitalResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';

export default async function getHospitals(): Promise<HospitalResponse[] | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/hospitals`, {
      method: 'GET',
      credentials: 'include', // Ensure cookies are included in requests
    });

    if (!response.ok) {
      throw new Error('Failed to fetch hospitals');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    return { message: 'Error fetching hospitals' } as ErrorResponse;
  }
}
