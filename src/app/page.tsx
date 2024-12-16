import { Button } from "@/components/ui/button";
import Image from "next/image";

const Page = () => {

    return (
        <div className='container flex flex-col items-center justify-center max-w-5xl min-h-screen gap-5 mx-auto subpixel-antialiased leading-relaxed md:flex-row text-pretty '>
            <section className="flex flex-col items-center justify-center flex-1 gap-5 md:justify-start md:items-start">
                <h1 className="text-3xl md:text-5xl ">Flashcardy</h1>
                <p className="text-lg font-light text-center md:text-2xl md:text-start">
                    Flashcardy é um site que <br />
                    descomplica a forma de <br />
                    estudar, transformando algo <br />
                    trabalhoso em algo <span className="text-indigo-700">simples</span> e <span className="text-indigo-700">prático</span>! <br />
                    Vamos começar?
                </p>
                <div className="flex gap-4">
                    <Button className="px-4 py-2 font-bold rounded w-28 md:w-32">Criar conta</Button>
                    <Button className="px-4 py-2 font-bold text-white rounded w-28 md:w-32 bg-rose-700 hover:bg-rose-800">Login</Button>
                </div>
            </section>
            <section className="items-center justify-center flex-1 hidden md:flex">
                <Image alt="" src={"/assets/Logo.png"} width={420} height={420}></Image>
            </section>
        </div>
    );

}

export default Page;