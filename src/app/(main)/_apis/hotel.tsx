import Link from 'next/link';
import React from 'react';

import { HotelDetail, QuestionAnswer } from '@main/_interfaces/hotelDetail';

import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ChairIcon from '@mui/icons-material/Chair';
import PoolIcon from '@mui/icons-material/Pool';
import FacilityDetail from '@main/_interfaces/facilityDetail';
import { BASE_URL } from '@/config/config';
import { Hotel } from '@/api/interfaces';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { Facility } from '../../../../interfaces';
import { addFacility as reduxAddFacility } from '@/redux/features/facilitiesSlide';

export async function getHotelDetailByID(hotelID: string): Promise<HotelDetail> {
  console.log(`Get hotel ID: ${hotelID}`);
  const response = await fetch(BASE_URL + '/api/v1/hotels/' + hotelID);
  const hotelResponse = await response.json();
  console.log(hotelResponse);
  console.log(responseToHotelDetail(hotelResponse.data));
  // const hotelDetail: HotelDetail = responseToHotelDetail(hotelResponse.data);

  // mock data
  // const hotelPicture = '/image/hotel_banner.svg';
  const imageUrl = hotelResponse.data.picture;
  const hotelPicture =
    imageUrl.startsWith('http') || imageUrl.startsWith('/') ? imageUrl : '/image/hotel_banner.svg';
  const hotelName = hotelResponse.data.name;
  const hotelTel = hotelResponse.data.tel;
  const hotelAddress = hotelResponse.data.address;
  const hotelDistrict = hotelResponse.data.district;
  const hotelProvince = hotelResponse.data.province;
  const hotelPostalCode = hotelResponse.data.postalcode;

  // derived data
  const hotelAddressFull = `${hotelAddress}, ${hotelDistrict}, ${hotelProvince}, ${hotelPostalCode}`;
  const questionAnswers: QuestionAnswer[] = [
    {
      question: 'What is the check-in and check-out time?',
      answer: 'Check-in is from 14:00, and check-out is until 12:00.',
    },
    {
      question: "What is the hotel's telephone number?",
      answer: (
        <Link href={'tel:' + hotelTel} className="text-[18px] underline" id="hotel-tel">
          {hotelTel}
        </Link>
      ),
    },
    {
      question: "What is the hotel's address?",
      answer: (
        <Link
          href={'https://www.google.co.th/maps/search/' + hotelName}
          className="text-[18px] underline"
          id="hotel-address"
        >
          {hotelAddressFull}
        </Link>
      ),
    },
  ];
  const facilityDetails: FacilityDetail[] = [
    {
      facilityTitle: 'Transit Bus',
      facilityImage: <AirportShuttleIcon sx={{ fontSize: 50 }} color="secondary" />,
    },
    {
      facilityTitle: 'Fitness',
      facilityImage: <FitnessCenterIcon sx={{ fontSize: 50 }} color="secondary" />,
    },
    {
      facilityTitle: 'Pool',
      facilityImage: <PoolIcon sx={{ fontSize: 50 }} color="secondary" />,
    },
    {
      facilityTitle: 'Lounge',
      facilityImage: <ChairIcon sx={{ fontSize: 50 }} color="secondary" />,
    },
  ];

  return {
    hotelID,
    hotelPicture,
    hotelName,
    hotelTel,
    hotelAddress,
    hotelDistrict,
    hotelProvince,
    hotelPostalCode,
    hotelAddressFull,
    facilityDetails,
    questionAnswers,
  };
}

export async function deleteHotelByID(token: string, hotelID: string): Promise<void> {
  const response = await fetch(BASE_URL + '/api/v1/hotels/' + hotelID, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
  const data = await response.json();
  console.log(data);

  if (data.status === 'success') {
    console.log('Delete success');
  } else {
    console.log('Delete fail');
  }
}

export async function updateHotelByID(
  token: string,
  hotelID: string,
  hotelDetail: HotelDetail,
): Promise<void> {
  console.log(`Update hotel ID: ${hotelID}`);
  console.log(hotelDetail);
  console.log(hotelDetailToRequest(hotelDetail));
  const response = await fetch(BASE_URL + '/hotels/' + hotelID, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(hotelDetailToRequest(hotelDetail)),
  });
  const data = await response.json();
  console.log(data);

  if (data.status === 'success') {
    console.log('Update success');
  } else {
    console.log('Update fail');
  }
}

export async function createHotel(token: string, hotelDetail: HotelDetail): Promise<void> {
  const response = await fetch(BASE_URL + '/hotels', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(hotelDetail),
  });
  const data = await response.json();
  console.log(data);

  if (data.status === 'success') {
    console.log('Create success');
  } else {
    console.log('Create fail');
  }
}

export async function bookHotel(hotelID: string): Promise<void> {
  const response = await fetch(BASE_URL + '/hotels/' + hotelID + '/bookings', { method: 'POST' });
  const data = await response.json();
  console.log(data);

  if (data.status === 'success') {
    console.log('Book success');
  } else {
    console.log('Book fail');
  }
}

export async function addFacility(hotelID: string, facilityDetail: FacilityDetail, dispatch: AppDispatch): Promise<void> {
  // TODO: add facility
  const facility: Facility = {
    name: facilityDetail.facilityTitle,
    logo: facilityDetail.facilityImage,
    hotelId: hotelID,
  };
  dispatch(reduxAddFacility(facility));

}

export function responseToHotelDetail(response: Hotel): HotelDetail {
  return {
    hotelID: response._id as string,
    hotelPicture: response.picture as string,
    hotelName: response.name,
    hotelTel: response.tel as string,
    hotelAddress: response.address,
    hotelDistrict: response.district,
    hotelProvince: response.province,
    hotelPostalCode: response.postalcode,
  };
}

export function hotelDetailToRequest(hotelDetail: HotelDetail): Hotel {
  return {
    picture: hotelDetail.hotelPicture,
    name: hotelDetail.hotelName,
    tel: hotelDetail.hotelTel,
    address: hotelDetail.hotelAddress,
    district: hotelDetail.hotelDistrict,
    province: hotelDetail.hotelProvince,
    postalcode: hotelDetail.hotelPostalCode,
  };
}
