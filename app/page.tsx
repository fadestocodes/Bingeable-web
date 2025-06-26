import Image from "next/image";
import Navbar from "@/components/Navbar";
import { User } from "./types";
import { getUsersForCarousel } from "./lib/api/user";
import { colors } from "@/constants/Colors";
import UserCarousel from "@/components/UserCarousel";


export default async function Home() {

    const usersList: User[] | null = await getUsersForCarousel()
    console.log('USERSLIST', usersList)


  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="pt-6 w-full h-full  bg-[#171717]">
     <div
        className="absolute bottom-0 left-0 w-full h-full  overflow-hidden"
        style={{
          background: `linear-gradient(to right, black 0% ,black 8%, transparent 40%, transparent 60%, black 92%, black 100%)`,
          zIndex: 50,
        }}
      />
      <header className="z-50 absolute w-full">
        <Navbar />
      </header>
      <main className="flex flex-col gap-[32px]  row-start-2 items-center sm:items-start bg-[#171717]">
        <section className="justify-center items-center w-full h-full" style={{height:500, paddingTop:300}}>
          <h1 className="text-white text-4xl font-bold text-left justify-self-center " style={{ position:'relative', width:350, zIndex:1}}>Join a community of real film lovers.</h1>
          <h2 className="text-white  text-xs text-center " style={{ position:'relative', zIndex:1}}>(iOS available, web version in development)</h2>
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
          <div className=" w-full flex flex-col justify-center items-center gap-10 ">
            <UserCarousel  usersList={usersList}/>
            <p className="text-white text-xs z-30">Powered by</p>
          </div>
        </section>
      </main>
      <section className="h-[1000px] w-full " style={{backgroundColor:colors.primary}}>

      </section>
    </div>
  );
}
