import Image from 'next/image';
export default function NavBar() {
  return (
    <nav className="flex h-[60px] flex-row items-center">
      <Image
        src={'/logo.png'}
        height={90}
        width={300}
        style={{ width: 'auto', height: '100%' }}
        alt="logo"
      ></Image>
      <div className="ml-auto mr-[10px] flex h-[45px] w-[45px] items-center justify-center rounded-full bg-stone-400">
        <h1>S</h1>
      </div>
    </nav>
  );
}
