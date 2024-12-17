"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Notification } from "@/components/toast/toast"
import { z } from "zod"
import { useSendEmailToRecoverPassword } from "@/services/user/user-hooks"


export const ForgotPasswordForm = () => {

    const [email, setEmail] = useState<string>("")
    const router = useRouter()

    const useRecover = useSendEmailToRecoverPassword()

    const handleForgotPasswordSubmit = async () => {
        try {
            const userData = z.string().email().parse(email);
            useRecover.mutate(userData, {
                onSuccess: (data) => {
                    Notification({ message: "E-mail encontrado, em breve você receberá um email!", type: "success" });
                    setTimeout(() => {
                        router.push(data.redirectTo)
                    }, 1500)
                },
                onError: () => {
                    router.push("/forgotpassword?error=true")
                    Notification({ message: "Este e-mail não foi encontrado. Verifique novamente", type: "error" })
                }
            })
        } catch (error) {
            router.push("/forgotpassword?error=true")
            Notification({ message: "Este e-mail não foi encontrado. Verifique novamente", type: "error" })
            console.log(error)
        }
    }


    return (
        <div className="w-full h-96 lg:h-[540px] flex-1 col-span-1 lg:col-span-2">
            <div className="flex flex-col justify-center w-full h-full gap-2 p-5 border rounded lg:gap-5 border-zinc-700">
                <Label htmlFor="email" className="ml-2 text-base font-semibold md:text-lg">Email da sua conta</Label>
                <div className="flex items-end">
                    <ArrowRight className="hidden md:block" />
                    <Input
                        id="email"
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="h-5 border-transparent rounded-none outline-none focus:border-b-indigo-700 border-b-zinc-700 focus:ring-0 focus-visible:ring-transparent"
                    />
                </div>
                {useRecover.isPending && Notification({ message: "Enviando e-mail de recuperação...", type: "info" })}
                <Button
                    className="w-full my-5 text-white rounded md:mb-10 lg:px-4 lg:py-2 bg-rose-700 hover:bg-rose-800"
                    onClick={handleForgotPasswordSubmit}
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