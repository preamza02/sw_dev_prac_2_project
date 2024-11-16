import { Hospital, HospitalResponse, ErrorResponse } from '../interfaces';
import { BASE_URL } from '@/config/config';
export default async function createHospital(
  hospital: Hospital,
): Promise<HospitalResponse | ErrorResponse> {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/hospitals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hospital),
      credentials: 'include', // Ensure cookies are included in requests
    });

    if (!response.ok) {
      throw new Error('Failed to create hospital');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating hospital:', error);
    return { message: 'Error creating hospital' } as ErrorResponse;
  }
}
