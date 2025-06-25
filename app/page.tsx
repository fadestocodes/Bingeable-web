import Image from "next/image";
import Navbar from "@/components/Navbar";
import { User } from "./types";
import { getUsersForCarousel } from "./lib/api/user";
import UserCarousel from "@/components/UserCarousel";


export default async function Home() {

    const usersList: User[] | null = await getUsersForCarousel()
    console.log('USERSLIST', usersList)


  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="pt-6 w-full h-full  bg-[#171717]">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start bg-[#171717]">
        <section className="justify-center items-center w-full h-full" style={{height:800}}>
          <h1 className="text-white text-5xl font-semibold text-center " style={{ position:'relative', zIndex:1}}>Join a community of other film lovers</h1>
          <div className=" w-full   overflow-hidden" style={{}}>
            {/* Background Image */}
            <Image
              src={'/heroimage.jpg'}
              alt="Backdrop"
              fill
              className="object-cover"
              priority
              style={{zIndex:0}}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#171717]" style={{zIndex:0}} />
          </div>

        </section>
        <section className="w-full h-full justify-center items-center" style={{position:'relative'}} >
          <div className="h-[2300px] w-full">
            <h2 className="text-white font-bold text-4xl">Features</h2>
            <UserCarousel  usersList={usersList}/>
          </div>
        </section>
      </main>
    </div>
  );
}
