'use client';
import Image from 'next/image';
import { Button } from '@mui/material';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { useState, useEffect } from 'react';
import { HotelDetail } from '@main/_interfaces/hotelDetail';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FacilityCard from '@main/_components/facililtyCard';

import {
  getHotelDetailByID,
  deleteHotelByID,
  updateHotelByID,
  createHotel,
  uploadHotelImage,
  bookHotel,
  addFacility,
} from '@main/_apis/hotel';

type HotelDetailCardProps = {
  isEditing: boolean;
  isCreating?: boolean;
  hotelID?: string | null;
};

const initialHotelDetail = {
  hotelID: '',
  hotelPicture: '',
  hotelName: '',
  hotelTel: '',
  hotelAddress: '',
  hotelDistrict: '',
  hotelProvince: '',
  hotelPostalCode: '',
  hotelAddressFull: '',
  facilityDetails: [],
  questionAnswers: [],
};

export default function HotelDetailCard({ isEditing, isCreating, hotelID }: HotelDetailCardProps) {
  const [isShowAnswers, setIsShowAnswers] = useState([isEditing, isEditing, isEditing]);
  const [hotelDetail, setHotelDetail] = useState<HotelDetail>(Object(initialHotelDetail));
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const severityMapping: { [key: string]: 'error' | 'warning' | 'info' | 'success' } = {
    'Booking success': 'success',
    'Hotel deleted': 'warning',
    'Hotel created': 'success',
    'Hotel updated': 'success',
    'Image uploaded': 'success',
    'Facility added': 'success',
  }

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
    if (isCreating) {
      createHotel(hotelDetail).then(() => {
        setSnackBarMessage('Hotel created');
        setIsSnackBarOpen(true);
      });
    } else if (hotelID) {
      updateHotelByID(hotelID, hotelDetail).then(() => {
        setSnackBarMessage('Hotel updated');
        setIsSnackBarOpen(true);
      });
    }
  };
  const onClickBook = () => {
    if (!hotelID) return;
    bookHotel(hotelID).then(() => {
        setIsSnackBarOpen(true);
        setSnackBarMessage('Booking success');
    });
  };
  const onClickUploadImage = () => {
    if (!hotelID) return;
    const image = new File([''], 'test.jpg', { type: 'image/jpeg' });
    uploadHotelImage(hotelID, image).then(() => {
      setSnackBarMessage('Image uploaded');
        setIsSnackBarOpen(true);
    });
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
          <h1 className="text-[27px]">{hotelDetail.hotelName}</h1>
          {buttonGroup}
        </div>
        {splitLine}
        <p className="text-[20px] opacity-80" id="hotel-description">
          {hotelDetail.hotelName} is an exclusive property in the vibrant Ratchada area of Bangkok,
          offering excellent hospitality and convenient amenities. With a fitness center, indoor
          pool, and shared lounge/TV area, it's perfect for two travelers.
        </p>
        {splitLine}
        <p className="text-[20px] opacity-80" id="hotel-facility">
          Facilities
        </p>
        <div className="flex flex-row items-center justify-start gap-[16px]" id="hotel-facilities">
          {hotelDetail.facilityDetails.map((facility, index) => (
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
        {hotelDetail.questionAnswers.map((qa, index) => (
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
        {splitLine}
      </div>
      <Snackbar 
        open={isSnackBarOpen}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={(event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason,) => (reason==="clickaway")?null:setIsSnackBarOpen(false)}
      >
        <Alert onClose={() => setIsSnackBarOpen(false)} severity={severityMapping[snackBarMessage]}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
