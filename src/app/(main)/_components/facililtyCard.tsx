import FacilityDetail from '../_interfaces/facilityDetail';
import Image from 'next/image';

export default function FacilityCard({ facilityTitle, facilityImage }: FacilityDetail) {
  return (
    <div className="flex h-[150px] w-[150px] flex-col items-center justify-center gap-[10px] rounded-[20px] bg-white py-[33px] shadow-lg">
      {typeof facilityImage === 'string' ? (
        <Image src={facilityImage} alt={facilityTitle} width={50} height={50} />
      ) : (
        facilityImage
      )}
      <p className="text-[20px]">{facilityTitle}</p>
    </div>
  );
}
