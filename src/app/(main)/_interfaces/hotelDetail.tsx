import FacilityDetail from './facilityDetail';

export interface QuestionAnswer {
  question: string | React.ReactNode;
  answer: string | React.ReactNode;
}

export interface HotelDetail {
  hotelID: string;
  hotelPicture: string;
  hotelName: string;
  hotelTel: string;
  hotelAddress: string;
  hotelDistrict: string;
  hotelProvince: string;
  hotelPostalCode: string;
  hotelAddressFull: string;
  facilityDetails: FacilityDetail[];
  questionAnswers: QuestionAnswer[];
}
