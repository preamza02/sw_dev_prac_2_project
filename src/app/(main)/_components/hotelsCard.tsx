import Image from 'next/image';
export default function HotelsCard() {
  return (
    <div className="flex h-[150px] w-full flex-col overflow-hidden rounded-2xl border shadow">
      <div className="flex h-full w-full flex-row items-center justify-center">
        <div className="relative h-full w-1/4 overflow-hidden">
          <Image src="/img/test_hotels.png" alt="hotel" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="flex w-3/4 flex-row p-10">
          <div className="flex w-full flex-col">
            <h1>Hotel Name</h1>
            <p>District</p>
            <p>Province</p>
          </div>
          <button className="w-fit rounded bg-blue-500 px-6 py-2 text-white">Search</button>
        </div>
      </div>
    </div>
  );
}
