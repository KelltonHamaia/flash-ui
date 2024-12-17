"use client"

import { Notification } from "@/components/toast/toast"
import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { useChechToken } from "@/services/user/user-hooks"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { z } from "zod"

export const ChecKRecoveryTokenForm = () => {

    const [otpPassword, setOtpPassword] = useState("");
    const router = useRouter()

    const useRecover = useChechToken()

    const handleCheckTokenSubmit = async () => {
        try {
            const userData = z.string().parse(otpPassword);
            useRecover.mutate(userData, {
                onSuccess: (data) => {
                    Notification({ message: "Token validado! Prossiga para criar sua nova senha!", type: "success" });
                    setTimeout(() => {
                        router.push(data.redirectTo)
                    }, 1500)
                },
                onError: () => {
                    router.push("/checktoken?error=true")
                    Notification({ message: "Token inválido. Por favor tente verifique se você digitou corretamente", type: "error" })
                }
            })
        } catch (error) {
            router.push("/checktoken?error=true")
            Notification({ message: "Token inválido. Por favor tente verifique se você digitou corretamente", type: "error" })
            console.log(error)
        }
    }

    return (
        <div className="w-full h-96 lg:h-[540px] flex-1 col-span-1 lg:col-span-2">
            <div className="flex flex-col justify-center w-full h-full gap-2 p-5 border rounded lg:gap-5 border-zinc-700">
                <Label htmlFor="email" className="ml-2 text-base font-semibold text-center md:text-lg">Insira o código de seis digitos</Label>
                <div className="flex justify-center">

                    <InputOTP maxLength={6} value={otpPassword} onChange={(value) => setOtpPassword(value)}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>

                </div>

                <Button
                    onClick={handleCheckTokenSubmit}
                    className="w-full my-5 text-white rounded md:mb-10 lg:px-4 lg:py-2 bg-rose-700 hover:bg-rose-800"
                >
                    Recuperar
                </Button>

                <hr />

                <Button variant={"link"} asChild className="self-start h-5">
                    <Link href={"/signin"} className="text-xs tracking-tighter">Me Lembrei! Voltar ao Login 😂</Link>
                </Button>

            </div>
        </div>
    )
}