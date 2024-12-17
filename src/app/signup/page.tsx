import { Toaster } from "sonner";
import { SignUpForm } from "./form";

const Page = () => {

    return (
        <div className='container grid max-w-5xl min-h-screen grid-cols-1 gap-5 p-5 mx-auto tracking-tighter lg:grid-cols-5 lg:flex-row lg:items-center'>
            <div className="flex flex-col gap-5 lg:gap-10 w-full pt-5 md:pt-0 h-96 md:h-60 lg:h-[540px] px-5 md:border-none border rounded border-zinc-700 col-span-1 lg:col-span-3">
                <h1 className="text-2xl font-semibold lg:text-4xl">Opaa! Vejo que deseja realizar seu cadastro!</h1>
                <p className="text-lg font-light md:text-2xl md:text-start">
                    Quer dizer que é uma pessoa estudiosa, e isso já o torna um <span className="text-indigo-600">vencedor</span>. <br />
                    Então, por favor informe as suas credenciais!
                </p>
            </div>
            <SignUpForm />

        </div>
    );

}

export default Page;