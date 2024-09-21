export default function AuthContainer({ children }: { children: React.ReactNode; }) {
    return (
        <div className="w-[500px] h-fit bg-white rounded-xl border border-black 
        border-opacity-20 px-4 pt-6 pb-10 drop-shadow-md space-y-4"
        >
            {children}
        </div>
    )
}