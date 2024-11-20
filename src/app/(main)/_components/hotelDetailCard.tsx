'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useState, useEffect, useContext } from 'react';
import { HotelsContext } from '@/context/HotelContext';
import { HotelDetail, initialHotelDetail } from '@main/_interfaces/hotelDetail';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FacilityCard from '@main/_components/facililtyCard';

import createBooking from '@/api/booking/createBooking';
import { getCookie } from 'cookies-next';
import { BookingRequest } from '@/api/interfaces';

import {
  getHotelDetailByID,
  deleteHotelByID,
  updateHotelByID,
  createHotel,
  addFacility,
} from '@main/_apis/hotel';

type HotelDetailCardProps = {
  isEditing: boolean;
  isCreating?: boolean;
  hotelID?: string | null;
};

export default function HotelDetailCard({ isEditing, isCreating, hotelID }: HotelDetailCardProps) {
  const [isShowAnswers, setIsShowAnswers] = useState([isEditing, isEditing, isEditing]);
  const [hotelDetail, setHotelDetail] = useState<HotelDetail>(initialHotelDetail());
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const [isEditAddressCardShow, setIsEditAddressCardShow] = useState(false);
  const [isUploadImageCardShow, setIsUploadImageCardShow] = useState(false);
  const [onPreviewImageURL, setOnPreviewImageURL] = useState('');
  const { checkInDate, checkOutDate } = useContext(HotelsContext);

  const severityMapping: { [key: string]: 'error' | 'warning' | 'info' | 'success' } = {
    'Booking success': 'success',
    'Hotel deleted': 'warning',
    'Hotel created': 'success',
    'Hotel updated': 'success',
    'Image uploaded': 'success',
    'Facility added': 'success',
  };

  // mock data
  const toggleAnswer = (index: number) => {
    const newIsShowAnswers = [...isShowAnswers];
    newIsShowAnswers[index] = !newIsShowAnswers[index];
    setIsShowAnswers(newIsShowAnswers);
  };

  // get hotel detail
  useEffect(() => {
    if (!hotelID) return;
    getHotelDetailByID(hotelID).then((resHotelDetail) => {
      setHotelDetail(resHotelDetail);
      setOnPreviewImageURL(resHotelDetail.hotelPicture);
    });
  }, [hotelID, setHotelDetail]);

  const onClickDelete = () => {
    if (!hotelID) return;
    deleteHotelByID(hotelID).then(() => {
      setSnackBarMessage('Hotel deleted');
      setIsSnackBarOpen(true);
    });
  };
  const onClickEditOrCreate = () => {
    const token = getCookie('my_token');
    if (isCreating) {
      createHotel(token as string, hotelDetail).then(() => {
        setSnackBarMessage('Hotel created');
        setIsSnackBarOpen(true);
      });
    } else if (hotelID) {
      updateHotelByID(token as string, hotelID, hotelDetail).then(() => {
        setSnackBarMessage('Hotel updated');
        setIsSnackBarOpen(true);
      });
    }
  };
  const onClickBook = () => {
    if (!hotelID) return;

    const token = getCookie('my_token');
    if (!token) {
      setIsSnackBarOpen(true);
      setSnackBarMessage('Please login');
      return;
    }

    const bookingRequest: BookingRequest = {
      bookingDate: checkInDate.toISOString(),
      checkoutDate: checkOutDate.toISOString(),
      createdAt: new Date().toISOString(),
    };
    createBooking(token as string, hotelID, bookingRequest).then((res) => {
      if ('message' in res) {
        alert('Booking fail (check in date must be earlier than check out date)');
      } else {
        setSnackBarMessage('Booking success, please check your booking in booking card');
        setIsSnackBarOpen(true);
      }
    });
  };
  const onClickUploadImage = () => {
    setIsUploadImageCardShow(!isUploadImageCardShow);
    setHotelDetail({ ...hotelDetail, hotelPicture: onPreviewImageURL });
    console.log(hotelDetail);
  };
  const onAddFacility = () => {
    if (!hotelID) return;
    addFacility(hotelID, { facilityTitle: 'New Facility', facilityImage: '' }).then(() => {
      setSnackBarMessage('Facility added');
      setIsSnackBarOpen(true);
    });
  };

  const buttonGroup = isEditing ? (
    <div className="flex flex-row gap-[8px]">
      {!isCreating && (
        <Button
          className="w-[100px] rounded-[10px] bg-[#eb5a1b] font-itim text-[20px] text-white"
          onClick={onClickDelete}
        >
          Delete
        </Button>
      )}
      <Button
        className="w-[100px] rounded-[10px] bg-[#4190ed] font-itim text-[20px] text-white"
        onClick={onClickEditOrCreate}
      >
        {isCreating ? 'Create' : 'Edit'}
      </Button>
    </div>
  ) : (
    <Button
      className="w-[160px] rounded-[10px] bg-[#47d13b] font-itim text-[20px] text-white"
      onClick={onClickBook}
    >
      Book
    </Button>
  );

  const onClickEditAddress = () => {
    setIsEditAddressCardShow(!isEditAddressCardShow);
    hotelDetail.hotelAddressFull = `${hotelDetail.hotelAddress}, ${hotelDetail.hotelDistrict}, ${hotelDetail.hotelProvince}, ${hotelDetail.hotelPostalCode}`;
    if (hotelDetail.questionAnswers) {
      hotelDetail.questionAnswers[2].answer = hotelDetail.hotelAddressFull;
      hotelDetail.questionAnswers[1].answer = hotelDetail.hotelTel;
    }
    setHotelDetail(hotelDetail);
    console.log(hotelDetail);
  };
  const onClickPreviewImage = () => {
    setOnPreviewImageURL((document.getElementById('hotel-image-url') as HTMLInputElement).value);
  };

  const uploadImageCard = (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="flex w-[869px] flex-col gap-[16px] rounded-[20px] bg-[#ffffff] p-[16px] shadow-lg">
        <h1 className="text-[27px]">Upload Image</h1>
        <div className="flex flex-row items-center gap-[16px]">
          <div className="w-[150px] text-[20px]">Image URL</div>:
          <input
            type="text"
            id="hotel-image-url"
            placeholder={onPreviewImageURL}
            className="w-auto rounded-[10px] border-[1px] border-[#000000] p-[8px] text-[20px]"
          />
        </div>
        <div className="relative h-[200px] w-full rounded-[20px]">
          {/* show image from link */}
          <Image
            src={onPreviewImageURL}
            alt="Hotel Banner"
            // layout="fill"
            objectFit="cover"
            className="rounded-[20px]"
          />
        </div>
        <div className="ml-auto flex w-fit flex-row items-center justify-end gap-[8px]">
          <Button
            className="h-[40px] rounded-[10px] bg-[#4190ed] font-itim text-[14px] text-white"
            onClick={onClickPreviewImage}
          >
            Preview
          </Button>
          <Button
            className="h-[40px] rounded-[10px] bg-[#4190ed] font-itim text-[14px] text-white"
            onClick={onClickUploadImage}
          >
            Upload
          </Button>
          <Button
            className="h-[40px] rounded-[10px] bg-[#4190ed] font-itim text-[14px] text-white"
            onClick={() => setIsUploadImageCardShow(false)}
            variant="outlined"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );

  const editAddressCard = (
    // is show over all the screen on middle and have a close button
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-[16px] rounded-[20px] bg-[#ffffff] p-[16px] shadow-lg">
        <h1 className="text-[27px]">Edit Address</h1>
        <div className="flex flex-row items-center gap-[16px]">
          <div className="w-[150px] text-[20px]">Address</div>:
          <input
            type="text"
            value={hotelDetail.hotelAddress}
            onChange={(e) => setHotelDetail({ ...hotelDetail, hotelAddress: e.target.value })}
            className="w-auto rounded-[10px] border-[1px] border-[#000000] p-[8px] text-[20px]"
          />
        </div>
        <div className="flex flex-row items-center gap-[16px]">
          <div className="w-[150px] text-[20px]">District</div>:
          <input
            type="text"
            value={hotelDetail.hotelDistrict}
            onChange={(e) => setHotelDetail({ ...hotelDetail, hotelDistrict: e.target.value })}
            className="w-auto rounded-[10px] border-[1px] border-[#000000] p-[8px] text-[20px]"
          />
        </div>
        <div className="flex flex-row items-center gap-[16px]">
          <div className="w-[150px] text-[20px]">Province</div>:
          <input
            type="text"
            value={hotelDetail.hotelProvince}
            onChange={(e) => setHotelDetail({ ...hotelDetail, hotelProvince: e.target.value })}
            className="w-auto rounded-[10px] border-[1px] border-[#000000] p-[8px] text-[20px]"
          />
        </div>
        <div className="flex flex-row items-center gap-[16px]">
          <div className="w-[150px] text-[20px]">Postal Code</div>:
          <input
            type="text"
            value={hotelDetail.hotelPostalCode}
            onChange={(e) => setHotelDetail({ ...hotelDetail, hotelPostalCode: e.target.value })}
            className="w-auto rounded-[10px] border-[1px] border-[#000000] p-[8px] text-[20px]"
          />
        </div>
        <h1 className="text-[27px]">Edit Contract</h1>
        <div className="flex flex-row items-center gap-[16px]">
          <div className="w-[150px] text-[20px]">Tel</div>:
          <input
            type="text"
            value={hotelDetail.hotelTel}
            onChange={(e) => setHotelDetail({ ...hotelDetail, hotelTel: e.target.value })}
            className="w-auto rounded-[10px] border-[1px] border-[#000000] p-[8px] text-[20px]"
          />
        </div>
        <Button
          className="mx-[70px] h-[40px] rounded-[10px] bg-[#4190ed] font-itim text-[14px] text-white"
          onClick={onClickEditAddress}
        >
          Save
        </Button>
      </div>
    </div>
  );

  const splitLine = <div className="h-[1px] w-full bg-[#000000]" />;

  return (
    <div className="flex w-[869px] flex-col gap-[16px] rounded-[20px] bg-[#ffffff] pb-[32px] shadow-md">
      <div className="relative h-[200px] w-full rounded-t-[20px]" id="hotel-banner">
        <Image
          src={hotelDetail.hotelPicture}
          alt="Hotel Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-t-[20px]"
        />
        {isEditing && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <Button
              className="rounded-[10px] bg-[#ffffff] px-[16px] py-[8px] font-itim text-[20px] text-black opacity-70"
              onClick={onClickUploadImage}
            >
              Upload
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-[16px] px-[20px]" id="hotel-detail">
        <div className="flex flex-row items-center justify-between p-[16px]" id="header-item">
          {isEditing ? (
            <div className="flex flex-row items-center gap-[16px] rounded-[10px] border-[1px] border-[#000000] p-[8px]">
              <input
                type="text"
                value={hotelDetail.hotelName}
                onChange={(e) => setHotelDetail({ ...hotelDetail, hotelName: e.target.value })}
                className="w-auto border-none text-[20px] outline-none"
              />
              🖋️
            </div>
          ) : (
            <h1 className="text-[27px]">{hotelDetail.hotelName}</h1>
          )}
          {buttonGroup}
        </div>
        {splitLine}
        <p className="text-[20px] opacity-80" id="hotel-description">
          {hotelDetail.hotelName} is an exclusive property in the vibrant Ratchada area of Bangkok,
          offering excellent hospitality and convenient amenities. With a fitness center, indoor
          pool, and shared lounge/TV area, it is perfect for two travelers.
        </p>
        {splitLine}
        <p className="text-[20px] opacity-80" id="hotel-facility">
          Facilities
        </p>
        <div className="flex flex-row items-center justify-start gap-[16px]" id="hotel-facilities">
          {hotelDetail.facilityDetails?.map((facility, index) => (
            <FacilityCard
              key={index}
              facilityTitle={facility.facilityTitle}
              facilityImage={facility.facilityImage}
            />
          ))}
          {isEditing && (
            <Button
              className="flex h-[150px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[20px] bg-white py-[33px] shadow-lg"
              onClick={onAddFacility}
            >
              <AddCircleIcon sx={{ fontSize: 50 }} color="disabled" />
            </Button>
          )}
        </div>
        {splitLine}
        <p className="text-[20px] opacity-80" id="hotel-faskedquestion">
          Frequently asked question
        </p>
        {hotelDetail.questionAnswers?.map((qa, index) => (
          <div className="flex flex-row px-[10px]" key={index}>
            <Button
              onClick={() => toggleAnswer(index)}
              className="items-top flex h-[30px] flex-row gap-[10px] align-top"
            >
              {isShowAnswers[index] ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </Button>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[20px] opacity-100">Q: {qa.question}</p>
              <p
                className="text-[20px] opacity-80 transition-all duration-500 ease-in-out"
                style={{ maxHeight: isShowAnswers[index] ? '100px' : '0px', overflow: 'hidden' }}
              >
                A: {qa.answer}
              </p>
            </div>
          </div>
        ))}
        {isEditing && (
          <Button
            className="mx-[70px] h-[40px] w-[150px] rounded-[10px] bg-[#4190ed] font-itim text-[14px] text-white"
            onClick={onClickEditAddress}
          >
            Edit Address
          </Button>
        )}
        {splitLine}
      </div>
      <Snackbar
        open={isSnackBarOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={(event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) =>
          reason === 'clickaway' ? null : setIsSnackBarOpen(false)
        }
      >
        <Alert onClose={() => setIsSnackBarOpen(false)} severity={severityMapping[snackBarMessage]}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
      {isEditAddressCardShow && editAddressCard}
      {isUploadImageCardShow && uploadImageCard}
    </div>
  );
}
