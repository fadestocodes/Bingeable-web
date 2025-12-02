import Image from "next/image";
import { User, Dialogue } from "./types";
import { getUsersForCarousel } from "./lib/api/user";
import { colors } from "@/constants/Colors";
import UserCarousel from "@/components/UserCarousel";
import DialogueCarousel from "@/components/DialogueCarousel";
import { getLandingPageDialogues } from "./lib/api/dialogue";
import DownloadButton from "@/components/DownloadButton";
// import { motion } from "motion/react"
import * as motion from "motion/react-client"


export default async function Home() {

    const usersList: User[] | null = await getUsersForCarousel()
    const dialogueList: Dialogue[] | null = await getLandingPageDialogues()


  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="w-full h-full  relative bg-[#171717]">
    
      <main className="flex flex-col gap-[32px] relative  w-full h-full  items-center sm:items-start bg-[#171717]">
        <div
            className="absolute top-0 left-0 w-full h-full "
            style={{
              background: `linear-gradient(to right, black 0% ,black 8%, transparent 40%, transparent 60%, black 92%, black 100%)`,
              zIndex: 40,
            }}
          />
        <section className="justify-center items-center w-full h-full gap-3 flex flex-col relative "  style={{height:500, paddingTop:300}}>
          <div className=" w-full h-full  overflow-hidden" style={{}}>
            {/* Background Image */}
            <Image
              src={'/heroimage.jpg'}
              alt="Backdrop"
              fill
              // className="object-cover"
              unoptimized
              sizes="100vw"
              priority
              style={{zIndex:0, objectFit:'cover'}}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#171717]" style={{zIndex:0}} />
          </div>
        <motion.div 
           initial= {{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition= {{ duration: 2 }}
           className="w-full flex relative flex-col justify-center items-center"
          >
          <h1 className="text-white text-3xl md:text-4xl font-bold text-left justify-self-center pl-4  w-[290px]  md:w-[350px]" style={{ position:'relative', zIndex:50}}>Join a community of real film lovers.</h1>
          <div className=" h-full  gap-1 pt-4 z-40 justify-center items-center  relative px-14" >
            <DownloadButton  />
            <h2 className="text-white justify-self-center text-sm text-center pt-2" style={{ position:'relative', zIndex:1}}>(web version in development)</h2>
          </div>
          </motion.div>
            
        </section>
        <section className="w-full h-full justify-center items-center pb-8" style={{position:'relative'}} >
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate= {{ opacity: 1, y: 0 }}
        transition= {{ delay: 0.5, duration:3, ease: 'easeOut' }}
        >

          <div className=" w-full h-full flex flex-col justify-center items-center gap-10 ">
            <UserCarousel  usersList={usersList}/>
            <div className="justify-center items-center gap-1  w-full flex flex-col">
              <p className="text-white text-xs z-30 text-center justify-self-center" style={{color:colors.mainGray}}>Powered by</p>
              <Image
                src={'tmdb.svg'}
                width={35}
                height={35}
                unoptimized
                alt="powered by The Movie Database"
              />
            </div>
          </div>
          </motion.div>
        </section>
      </main>
      <section className="   py-10 w-full h-full flex relative flex-col justify-center items-center" style={{backgroundColor:colors.primary}}>
        <section className=" gap-15 sm:gap-0 flex flex-col justify-center items-center z-20 pt-40 lg:pt-20  lg:flex-row lg:gap-5 ">
            <motion.div 
             initial= {{ opacity: 0 }}
             whileInView={{ y: 0, opacity:1 }}       
             transition= {{ duration: 2 }}
            className=" gap-3 items-center justify-center relative flex flex-col w-[100%] md:w-[65%] px-12 lg:w-[35%]"  style={{ }}>
              <h2 className="text-white  text-3xl font-bold text-left justify-self-center" >Follow your friends & their activities</h2>
              <p className="text-white   text-left justify-self-center" style={{color:colors.mainGray}}>Stay up to date with your friends from their Dialogue posts, recent watches, ratings and more.</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                transition= {{ delay: 0.5, duration:0.5, ease: 'easeIn' }}
                whileInView={{ y: 0, opacity:1 }}
            >
              <Image 
                src={'/screenshots/bingeable-screenshots_04.png'}
                width={500}
                unoptimized
                height={500}
                alt="screenshot of bingeable homepage"
                className=" -translate-y-40 lg:translate-y-0 "
                // className="-rotate-[0.7deg]"
              />
            </motion.div>
        </section>
        <section className="gap-15 sm:gap:0 flex flex-col justify-center items-center z-20  lg:flex-row lg:gap-5">
      
          <motion.div 
            initial= {{ opacity: 0 }}
            whileInView={{ y: 0, opacity:1 }}       
            transition= {{ duration: 2 }}
            className="w-full gap-3 items-center justify-center relative flex flex-col px-10 ">
            <h2 className="text-white text-3xl font-bold text-left justify-self-center" style={{}}>Not just films, TV shows too</h2>
            <p className="text-white   text-left justify-self-center" style={{color:colors.mainGray}}>An app like this should also have shows, don't you think?</p>
          </motion.div>
          <motion.div 
              initial={{ opacity: 0, y: 80 }}
              transition= {{ delay: 0.5, duration:0.5, ease: 'easeIn' }}
              whileInView={{ y: 0, opacity:1 }}
            className="relative w-full h-full ">
            <Image 
              src={'/screenshots/bingeable-screenshots_06.png'}
              width={500}
              unoptimized
              height={500}
              alt="screenshot of bingeable homepage"
               className=" -translate-y-40 lg:translate-y-0 "
            />
             <div
              className="absolute bottom-0 left-0 w-full h-[20%]  -translate-y-40 lg:translate-y-0 rounded-[15px] overflow-hidden"
              style={{
                  background: `linear-gradient(to bottom, transparent 20%, #171717 55%, #171717 100%)`,
                  zIndex: 0,
              }}
              />
          </motion.div>

        </section>
          <section className="gap-20 sm:gap-5 flex w-full flex-col justify-center items-center z-20 pt-0 lg:pt-0  lg:flex-row lg:gap-5 ">
            <motion.div 
            initial= {{ opacity: 0 }}
            whileInView={{ y: 0, opacity:1 }}       
            transition= {{ duration: 2 }}
            className=" gap-3 items-center justify-center relative flex flex-col  px-12 w-[100%] md:w-[65%] lg:w-[30%] " >
              <h2 className="text-white text-3xl font-bold text-left justify-self-center " style={{}}>Send personalized recommendations</h2>
              <p className="text-white   text-left justify-self-center " style={{color:colors.mainGray}}>Don't you love sending good movie recs? Never lose track of your sent or received recommendations again and reply to messages about the rec.</p>
            </motion.div>
            <motion.div 
             initial={{ opacity: 0, y: 80 }}
             transition= {{ delay: 0.5, duration:0.5, ease: 'easeIn' }}
             whileInView={{ y: 0, opacity:1 }}
              className="relative   px-4 justify-center items-center  ">
              <Image
                  src={'/screenshots/bingeable-screenshots_05.png'}
                  width={500}
                  height={500}
                  unoptimized
                  alt="screenshot of bingeable homepage"
                  className=" -translate-y-40 lg:translate-y-0 "

                />
                <div
                   className="absolute bottom-0 left-0 w-full h-[20%]  -translate-y-40 lg:translate-y-0 rounded-[15px] overflow-hidden"
                  style={{
                      background: `linear-gradient(to bottom, transparent 20%, #171717 55%, #171717 100%)`,
                      zIndex: 0,
                  }}
                  />
              </motion.div>
          </section>
         
        <section className="z-20 lg:pt-40   w-full gap-20 relative flex flex-col justify-center items-center">
            <div
              className="absolute top-0 left-0 w-full h-full  "
              style={{
                background: `linear-gradient(to right, #171717 0% ,#171717 8%, transparent 40%, transparent 60%, #171717 92%, #171717 100%)`,
                zIndex: 50,
              }}
            />
            <motion.div 
               initial={{ opacity: 0}}
               transition= {{  duration:0.5, ease: 'easeIn' }}
               whileInView={{ y: 0, opacity:1 }}
            className="w-full gap-5 justify-center items-center relative flex flex-col z-50 px-16 md:w-[65%] xl:w-[35%]">
              <h2 className="text-white text-3xl font-bold text-left justify-self-center" style={{}}>Talk about anything film.</h2>
              <p className="text-white   text-left justify-self-center " style={{color:colors.mainGray}}>Create Dialogues and post about your latest camera builds, recent binge, and anything cinema related.</p>
            </motion.div>
            <DialogueCarousel dialogues={dialogueList} />
        </section>
      </section>
    </div>
  );
}
