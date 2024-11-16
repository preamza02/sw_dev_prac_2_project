import { ClassNames } from '@emotion/react';
import HotelsCard from './_components/hotelsCard';
export default function MainHomePage() {
  return (
    <div className="h-[740px] max-h-[740px] space-y-5 overflow-y-scroll pr-20">
      <HotelsCard />
      <HotelsCard />
      <HotelsCard />
      <HotelsCard />
      <HotelsCard />
      <HotelsCard />
      <HotelsCard />
      <HotelsCard />
      <HotelsCard />
    </div>
  );
}
