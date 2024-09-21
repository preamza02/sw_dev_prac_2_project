import Image from "next/image"
export default function NavBar() {
    return (
        <nav className="h-[60px] flex flex-row items-center">
            <Image src={"/logo.png"} height={90} width={300} style={{ width: 'auto', height: '100%' }} alt="logo" ></Image>
            <div className="ml-auto mr-[10px] w-[45px] h-[45px] rounded-full bg-stone-400 flex items-center justify-center">
                <h1>S</h1>
            </div>
        </nav>
    )
}