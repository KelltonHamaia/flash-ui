"use client"

import { Notification } from "@/components/toast/toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { validateUserData } from "@/schema/user-schema-validation"
import { useCreateUser } from "@/services/user/user-hooks"
import { Label } from "@radix-ui/react-label"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export const SignUpForm = () => {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")

    const useCreate = useCreateUser()
    const router = useRouter();
    const handleCreateUserButton = () => {
        try {
            const userData = validateUserData.parse({ name, email, password, confirmPassword });

            useCreate.mutate(userData, {
                onSuccess: () => {
                    Notification({ message: "Conta criada com sucesso!", type: "success" });
                    setTimeout(() => {
                        router.push("/signin")
                    }, 1500)
                },
                onError: () => {
                    Notification({ message: "Erro na criação de usuário", type: "error" });
                }
            })

        } catch (error) {
            Notification({ message: "Erro na criação de usuário", type: "error" });
            console.log(error)
        }
    }

    return (
        <div className="w-full h-96 lg:h-[540px] flex-1 col-span-1 lg:col-span-2">
            <div className="flex flex-col w-full h-full gap-2 p-5 border rounded lg:gap-5 border-zinc-700">
                <Label htmlFor="name" className="ml-2 text-base font-semibold md:text-lg">Seu nome</Label>
                <div className="flex items-end">
                    <ArrowRight className="hidden md:block" />
                    <Input
                        id="name"
                        type="text"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        className="h-5 border-transparent rounded-none outline-none focus:border-b-indigo-700 border-b-zinc-700 focus:ring-0 focus-visible:ring-transparent"
                    />
                </div>
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

                <Label htmlFor="confirmPassword" className="ml-2 text-base font-semibold md:text-lg">Repita sua senha</Label>
                <div className="flex items-end">
                    <ArrowRight className="hidden md:block" />
                    <Input
                        id="confirmPassword"
                        type="password"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        className="h-5 border-transparent rounded-none outline-none border-b-zinc-700 focus:border-b-indigo-700 focus:ring-0 focus-visible:ring-transparent"
                    />
                </div>

                <Button
                    onClick={handleCreateUserButton}
                    className="w-full my-2 text-white rounded md:mb-5 lg:px-4 lg:py-2 bg-rose-700 hover:bg-rose-800"
                >
                    Vamos Lá!
                </Button>

                <hr />

                <Button variant={"link"} asChild className="self-start h-5">
                    <Link href={"/signin"} className="text-xs tracking-tighter">Já possuo uma conta 😎</Link>
                </Button>
            </div>
        </div>
    )
}