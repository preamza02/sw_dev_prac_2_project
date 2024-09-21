import Link from "next/link"
import ButtonContainer from "./buttonContainer"
export default function LinkButton(
    {
        title,
        link,
        bgColor = "#4190ED",
        borderColor = "#4190ED",
        textColor = "#FFFFFF"
    }:
        {
            title: string,
            link: string,
            bgColor?: string,
            borderColor?: string,
            textColor?: string
        }) {
    return (
        <Link style={{ backgroundColor: bgColor, borderColor: borderColor }} href={link} className={`border w-full h-fit flex rounded-lg`}>
            <ButtonContainer>
                <p style={{ color: textColor }} className={`font-bold`}>{title}</p>
            </ButtonContainer>
        </Link>
    )
}