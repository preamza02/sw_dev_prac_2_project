import Link from "next/link"
import ButtonContainer from "./buttonContainer"
export default function ActionButton(
    {
        title,
        onClick,
        bgColor = "#4190ED",
        borderColor = "#4190ED",
        textColor = "#FFFFFF"
    }:
        {
            title: string,
            onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
            bgColor?: string,
            borderColor?: string,
            textColor?: string
        }) {
    return (
        <button onClick={onClick} style={{ backgroundColor: bgColor, borderColor: borderColor }}
            className="py-[12px] px-[24px] w-full h-full border flex rounded-lg justify-center"
        >
            <p style={{ color: textColor }} className={`font-bold`}>{title}</p>
        </button>
    )
}