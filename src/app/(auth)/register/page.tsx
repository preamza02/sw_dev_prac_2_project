"use client"
import AuthContainer from "../_component/authContainer";
import LinkButton from "@/app/_components/linkButton";
import AuthFormElement from "../_component/authFormElement";
import AuthSelectElement from "../_component/authSelectElement";
import { useState } from "react";
export default function RegisterHomePage() {
    const [userName, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [tel, setTel] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassWord, setConfirmPassword] = useState<string>("")
    const typeList = [
        "user", "admin"
    ]
    const [type, setType] = useState<string>(typeList[0])
    return (
        <AuthContainer>
            <div className="flex flex-col space-y-1">
                <h1 className="text-3xl font-bold">Register</h1>
            </div>
            <hr />
            <div className="space-y-2">
                <AuthFormElement title="User Name" value={userName} setValue={setUserName} type="text"></AuthFormElement>
                <AuthFormElement title="Tel" value={tel} setValue={setTel} type="tel"></AuthFormElement>
                <AuthFormElement title="Email" value={email} setValue={setEmail} type="email"></AuthFormElement>
                <AuthFormElement title="Password" value={password} setValue={setPassword} type="password"></AuthFormElement>
                <AuthFormElement title="Confirm Password" value={confirmPassWord} setValue={setConfirmPassword} type="password"></AuthFormElement>
                <AuthSelectElement title="Type" value={type} setValue={setType} options={typeList}></AuthSelectElement>
            </div>
            <div className="space-y-2 w-4/5 mx-auto">
                <LinkButton link="Enter" title="Register" bgColor="#4190ED" textColor="#FFFFFF"></LinkButton>
            </div>
        </AuthContainer>
    );
}
