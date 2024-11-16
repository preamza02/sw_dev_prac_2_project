import { HospitalResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';
export default async function getHospitalById(
  id: string,
): Promise<HospitalResponse | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/hospitals/${id}`, {
      method: 'GET',
      credentials: 'include', // Ensure cookies are included in requests
    });

    if (!response.ok) {
      throw new Error('Failed to fetch hospital by ID');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching hospital by ID:', error);
    return { message: 'fetching hospital by ID' } as ErrorResponse;
  }
}
