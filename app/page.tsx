import Image from "next/image";
import Navbar from "@/components/Navbar";
import { User, Dialogue } from "./types";
import { getUsersForCarousel } from "./lib/api/user";
import { colors } from "@/constants/Colors";
import UserCarousel from "@/components/UserCarousel";
import DialogueCarousel from "@/components/DialogueCarousel";
import { getLandingPageDialogues } from "./lib/api/dialogue";


export default async function Home() {

    const usersList: User[] | null = await getUsersForCarousel()
    const dialogueList: Dialogue[] | null = await getLandingPageDialogues()
    console.log('USERSLIST', usersList)


  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="w-full h-full pb-8  bg-[#171717]">
      <header className="z-50 pt-6 absolute w-full">
        <Navbar />
      </header>
      <main className="flex flex-col gap-[32px] relative  w-full h-full row-start-2 items-center sm:items-start bg-[#171717]">
        <div
            className="absolute top-0 left-0 w-full h-full "
            style={{
              background: `linear-gradient(to right, black 0% ,black 8%, transparent 40%, transparent 60%, black 92%, black 100%)`,
              zIndex: 50,
            }}
          />
        <section className="justify-center items-center w-full h-full" style={{height:500, paddingTop:300}}>
          <h1 className="text-white text-4xl font-bold text-left justify-self-center " style={{ position:'relative', width:350, zIndex:1}}>Join a community of real film lovers.</h1>
          <h2 className="text-white  text-sm text-center " style={{ position:'relative', zIndex:1}}>(iOS available, web version in development)</h2>
          <div className=" w-full h-full  overflow-hidden" style={{}}>
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
        <section className="w-full h-full justify-center items-center pb-8" style={{position:'relative'}} >
          <div className=" w-full h-full flex flex-col justify-center items-center gap-10 ">
            <UserCarousel  usersList={usersList}/>
            <div className="justify-center items-center gap-1  w-full flex flex-col">
              <p className="text-white text-xs z-30 text-center justify-self-center" style={{color:colors.mainGray}}>Powered by</p>
              <Image
                src={'tmdb.svg'}
                width={35}
                height={35}
                alt="powered by The Movie Database"
              />
            </div>
          </div>
        </section>
      </main>
      <section className="h-[1000px] py-10 w-full flex flex-col justify-center items-center" style={{backgroundColor:colors.primary}}>
        <section className="h-[500px]">

        </section>

        <section className="z-20 py-8 w-full gap-12 relative flex flex-col justify-center items-center">
          <div
              className="absolute top-0 left-0 w-full h-full "
              style={{
                background: `linear-gradient(to right, #171717 0% ,#171717 8%, transparent 40%, transparent 60%, #171717 92%, #171717 100%)`,
                zIndex: 50,
              }}
            />
            <h2 className="text-white text-3xl font-bold text-left justify-self-center" style={{}}>Talk about anything film.</h2>
          <DialogueCarousel dialogues={dialogueList} />
        </section>
      </section>
    </div>
  );
}
