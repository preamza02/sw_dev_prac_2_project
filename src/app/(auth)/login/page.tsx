"use client"
import AuthContainer from "../_component/authContainer";
import LinkButton from "@/app/_components/linkButton";
import AuthFormElement from "../_component/authFormElement";
import { HotelsApi } from "@/api/gen";
import { useState } from "react";
export default function LoginHomePage() {
    const hotelApi = new HotelsApi()
    hotelApi.hotelsGet().then(value => console.log(value))
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    return (
        <AuthContainer>
            <div className="flex flex-col space-y-1">
                <h1 className="text-3xl font-bold">Login</h1>
                <h3 className="text-base">Prove your loyalty to Golden Armor by Enter Yor Holy account</h3>
            </div>
            <hr />
            <div className="space-y-2">
                <AuthFormElement title="Email" value={email} setValue={setEmail} type="email"></AuthFormElement>
                <AuthFormElement title="Password" value={password} setValue={setPassword} type="password"></AuthFormElement>
            </div>
            <div className="space-y-2 w-4/5 mx-auto">
                <LinkButton link="Enter" title="Enter" bgColor="#4190ED" textColor="#FFFFFF"></LinkButton>
                <LinkButton link="Register" title="Register" bgColor="#FFFFFF" textColor="#000000"></LinkButton>
            </div>
        </AuthContainer>
    );
}
