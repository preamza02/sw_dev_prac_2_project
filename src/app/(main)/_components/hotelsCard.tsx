import Image from 'next/image';
export default function HotelsCard() {
  return (
    <div className="flex h-[150px] w-full flex-col overflow-hidden rounded-2xl border-2 shadow">
      <div className="flex h-full w-full flex-row items-center justify-center">
        <div className="relative h-full w-1/4 overflow-hidden">
          <Image src="/img/test_hotels.png" alt="hotel" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex h-full w-3/4 flex-row px-10">
          <div className="m-auto flex w-full flex-col">
            <h1>Hotel Name</h1>
            <p>District</p>
            <p>Province</p>
          </div>
          <button className="m-auto w-fit rounded bg-green-500 px-6 py-2 text-white">Book</button>
        </div>
      </div>
    </div>
  );
}
