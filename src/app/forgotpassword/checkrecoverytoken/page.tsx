import { ChecKRecoveryTokenForm } from "./form";

const Page = () => {

    return (
        <div className='container grid max-w-5xl min-h-screen grid-cols-1 gap-5 p-5 mx-auto tracking-tighter lg:grid-cols-5 lg:flex-row lg:items-center'>
            <div className="flex flex-col gap-5 lg:gap-10 w-full h-96 pt-5 md:pt-0 md:h-60 lg:h-[540px] px-5 md:border-none border rounded border-zinc-700 col-span-1 lg:col-span-3">
                <h1 className="text-2xl font-semibold lg:text-4xl">
                    Vejo que está com o código em mãos! 😎
                </h1>
                <p className="text-lg font-light md:text-2xl md:text-start">
                    Por favor, digite o <span className="text-indigo-600">Código de seis digitos </span>
                    enviado ao seu email para dar continuidade à
                    <span className="text-indigo-600"> redefinição de senha.</span>
                </p>
            </div>
            <ChecKRecoveryTokenForm />
        </div>
    );

}

export default Page;