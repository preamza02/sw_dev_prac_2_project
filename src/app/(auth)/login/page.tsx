"use client"
import AuthContainer from "../_component/authContainer";
import LinkButton from "@/app/_components/linkButton";
import ActionButton from "@/app/_components/actionButton";
import AuthFormElement from "../_component/authFormElement";
import { UserApi } from "@/api/gen";
import { useState } from "react";
export default function LoginHomePage() {
    const userAPI = new UserApi()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const loginOnclick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(email, password)
        userAPI.authLoginPost({
            loginUserRequest: {
                email: email,
                password: password
            }
        }).then(value => console.log(value))
    }
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
                <ActionButton onClick={loginOnclick} title="Login" bgColor="#4190ED" textColor="#FFFFFF"></ActionButton>
                <LinkButton link="register" title="Register" bgColor="#FFFFFF" textColor="#000000"></LinkButton>
            </div>
        </AuthContainer>
    );
}
