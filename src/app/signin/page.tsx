import { phrases } from "@/_data/signin-phrases";
import { SignInForm } from "./form";

const Page = () => {

    return (
        <div className='container grid max-w-5xl min-h-screen grid-cols-1 gap-5 p-5 mx-auto lg:grid-cols-5 lg:flex-row lg:items-center'>
            <div className="flex flex-col gap-5 lg:gap-10 w-full h-80 md:h-60 lg:h-[540px] px-5 md:border-none border rounded border-zinc-700 col-span-1 lg:col-span-3">
                <h1 className="text-2xl font-semibold lg:text-3x">{phrases[new Date().getDay() - 1].phrase}</h1>
                <p className="text-lg font-light md:text-2xl md:text-start">
                    Por favor, informe seus dados <br />
                    e vamos estudar um <br /> pouquinho!
                </p>
            </div>
            <SignInForm />
        </div>
    );

}

export default Page;