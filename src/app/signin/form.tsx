"use client"

import { Notification } from "@/components/toast/toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { validateUserEntries } from "@/schema/user-schema-validation"
import { useLoginUser } from "@/services/user/user-hooks"
import { userStore } from "@/store/user-store"
import { User } from "@/types/User"
import { Label } from "@radix-ui/react-label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const SignInForm = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const router = useRouter()
    const useUser = userStore(state => state)
    const useLogin = useLoginUser()

    const handleLoginUser = () => {
        try {
            const userData = validateUserEntries.parse({ email, password });
            useLogin.mutate(userData, {
                onSuccess: (data) => {
                    Notification({ message: "Usuário logado com sucesso!", type: "success" });
                    useUser.setUser(data.user as User);
                    useUser.setToken(data.token as string);
                    setTimeout(() => {
                        router.push("/home")
                    }, 1500)
                },
                onError: () => {
                    Notification({ message: "Não foi possível fazer login. Tente novamente mais tarde", type: "error" })
                }
            })
        } catch (error) {
            Notification({ message: "Não foi possível fazer login. Tente novamente mais tarde", type: "error" })
            console.log(error)
        }
    }

    return (
        <div className="w-full h-96 lg:h-[540px] flex-1 col-span-1 lg:col-span-2">
            <div className="flex flex-col w-full h-full gap-2 p-5 border rounded lg:gap-5 border-zinc-700">
                <Label htmlFor="email" className="ml-2 text-base font-semibold md:text-lg">Seu email</Label>
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
                <Label htmlFor="password" className="ml-2 text-base font-semibold md:text-lg">Sua senha</Label>
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

                <Button
                    onClick={handleLoginUser}
                    className="w-full my-5 text-white rounded md:mb-10 lg:px-4 lg:py-2 bg-rose-700 hover:bg-rose-800"
                >
                    Vamos Lá!
                </Button>

                <hr />

                <div className="flex flex-col gap-4 mt-5 lg:mt-0 lg:gap-0 md:flex-row md:justify-between">
                    <Button variant={"link"} asChild className="h-5">
                        <Link href={"/signup"} className="text-xs tracking-tighter">Não tenho uma conta 😬</Link>
                    </Button>
                    <Button variant={"link"} asChild className="h-5">
                        <Link href={"/forgotpassword"} className="text-xs tracking-tighter">Esqueci minha senha 😓</Link>
                    </Button>
                </div>

            </div>
        </div>
    )
}