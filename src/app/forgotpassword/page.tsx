import { ForgotPasswordForm } from "./form";

const Page = () => {

    return (
        <div className='container grid max-w-5xl min-h-screen grid-cols-1 gap-5 p-5 mx-auto tracking-tighter lg:grid-cols-5 lg:flex-row lg:items-center'>
            <div className="flex flex-col gap-5 lg:gap-10 w-full h-96 pt-5 md:pt-0 md:h-60 lg:h-[540px] px-5 md:border-none border rounded border-zinc-700 col-span-1 lg:col-span-3">
                <h1 className="text-2xl font-semibold lg:text-4xl">
                    Eita!! Me parece que você esqueceu a sua senha :[
                </h1>
                <p className="text-lg font-light md:text-2xl md:text-start">
                    Por favor, informe o <span className="text-indigo-600">e-mail vinculado</span> <br />
                    a sua conta para enviarmos um
                    <span className="text-indigo-600"> token</span> de
                    <span className="text-rose-700"> redefinição de senha.</span>
                </p>
            </div>
            <ForgotPasswordForm />
        </div>
    );

}

export default Page;