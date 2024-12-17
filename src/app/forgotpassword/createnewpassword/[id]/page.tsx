"use server"
import { UpdatePassword } from "./form";

type Props = {
    params: Promise<{ id: string }>
}

const Page = async ({ params }: Props) => {

    const userId = (await params).id;

    return (
        <div className='container grid max-w-5xl min-h-screen grid-cols-1 gap-5 p-5 mx-auto tracking-tighter lg:grid-cols-5 lg:flex-row lg:items-center'>
            <div className="flex flex-col gap-5 lg:gap-10 w-full pt-5 md:pt-0 h-96 md:h-60 lg:h-[540px] px-5 md:border-none border rounded border-zinc-700 col-span-1 lg:col-span-3">
                <h1 className="text-2xl font-semibold lg:text-4xl">Uffa, vamos escolher uma nova senha? Dessa vez é pra não esquecer!!</h1>
                <p className="text-lg font-light md:text-2xl md:text-start">
                    Mas eu acho que você não vai mais esquecer... certo? 😁 <br />
                    Informe sua <span className="text-indigo-600">nova senha</span> e confirme para continuar.
                </p>
            </div>
            <UpdatePassword userId={userId} />
        </div>
    );

}

export default Page;