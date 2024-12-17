"use client"

import { Notification } from "@/components/toast/toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useResetPassword } from "@/services/user/user-hooks"
import { Label } from "@radix-ui/react-label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { z } from "zod"

type Props = {
    userId: string
}
export const UpdatePassword = ({ userId }: Props) => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const useReset = useResetPassword()
    const router = useRouter()

    const handleResetPasswordSubmit = async () => {
        try {
            const newPasswords = z.object({
                password: z.string().min(6),
                confirmPassword: z.string().min(6)
            }).refine(data => data.password === data.confirmPassword, {
                message: "As senhas não coincidem",
                path: ["confirmPassword"]
            }).parse({ password, confirmPassword })

            useReset.mutate({ userId, ...newPasswords }, {
                onSuccess: (data) => {
                    Notification({ message: "Nova Senha cadastrada com sucesso! Vê se não esquece hein!?", type: "success" });
                    setTimeout(() => {
                        router.push("/signin")
                    }, 1500)
                },
                onError: () => {
                    Notification({ message: "Não foi possível realizar a troca da senha. Tente novamente mais tarde!", type: "error" })
                }
            })
        } catch (error) {
            Notification({ message: "Não foi possível realizar a troca da senha. Tente novamente mais tarde!", type: "error" })
            console.log(error)
        }
    }

    return (
        <div className="w-full h-96 lg:h-[540px] flex-1 col-span-1 lg:col-span-2">
            <div className="flex flex-col justify-center w-full h-full gap-2 p-5 border rounded lg:gap-5 border-zinc-700">
                <Label htmlFor="password" className="ml-2 text-base font-semibold md:text-lg">Nova senha</Label>
                <div className="flex items-end">
                    <ArrowRight className="hidden md:block" />
                    <Input
                        id="password"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className="h-5 border-transparent rounded-none outline-none focus:border-b-indigo-700 border-b-zinc-700 focus:ring-0 focus-visible:ring-transparent"
                    />
                </div>

                <Label htmlFor="confirmPassword" className="ml-2 text-base font-semibold md:text-lg">Confirmar nova senha</Label>
                <div className="flex items-end">
                    <ArrowRight className="hidden md:block" />
                    <Input
                        id="confirmPassword"
                        type="password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        className="h-5 border-transparent rounded-none outline-none focus:border-b-indigo-700 border-b-zinc-700 focus:ring-0 focus-visible:ring-transparent"
                    />
                </div>


                <Button
                    onClick={handleResetPasswordSubmit}
                    className="w-full my-2 text-white rounded md:mb-5 lg:px-4 lg:py-2 bg-rose-700 hover:bg-rose-800"
                >
                    Vamos Lá!
                </Button>

                <hr />

                <Button variant={"link"} asChild className="self-start h-5">
                    <Link href={"/signin"} className="text-xs tracking-tighter">Me Lembrei! Voltar ao Login 😂</Link>
                </Button>

            </div>
        </div>
    )
}