import Projects from "./components/Projects";
import { Roboto_Mono } from 'next/font/google';
import Image from "next/image";

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weights: ['400', '700'], // Specify weights you need
});

export default function Home() {
    return (
        <div className={`${robotoMono.className} min-h-screen flex items-center justify-center bg-gray-900`}>
            <div className="min-h-screen flex items-center justify-center bg-gray-900 ">
                <div className="max-w-4xl text-white p-8">
                    <h1 className="text-4xl font-bold mb-4">Hi, I'm Shashidhar Biradar</h1>
                    
                    <div className="mb-8">
                        <h2 className="text-xl text-orange-500 mb-2">About Me</h2>
                        <div>
                            Aspiring Software Engineer with a strong interest in Cloud and Security. I am a full-stack engineer experienced with a flexible stack. I have worked on Machine Learning models, Distributed Systems, Cloud infrastructure, and full-stack applications.
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl text-orange-500 mb-2">Projects</h2>
                        
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Trex - A Tech Blogging and Forum Site</h3>
                            <div>
                                Built a serverless blogging site with Cloudflare Workers in the Hono environment. Implemented PostgreSQL database with Prisma ORM, and used React and Tailwind CSS for the frontend. Deployed on Vercel.
                            </div>
                            <a href="https://github.com/shashidhxr/trex" className="text-orange-500 hover:underline" target="_blank">View on GitHub</a> | 
                            <a href="https://trex0.vercel.app/" className="text-orange-500 hover:underline ml-2" target="_blank">Live Link</a>
                        </div>
                        
                        {/* <div className="mb-4">
                            <h3 className="text-lg font-semibold">BetterPES - A Content Hub for PES University</h3>
                            <p>
                                Actively contributed to a site with many live users, especially during exam seasons. Implemented UI components using Next.js and Tailwind CSS. 
                            </p>
                            <a href="https://better-pes.vercel.app/" className="text-orange-500 hover:underline" target="_blank">Live Link</a>
                        </div> */}

                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Payx - A Payment and Banking App</h3>
                            <div>
                                Built a payment and banking app. Worked on frontend and backend technologies, including MySQL and Express.js, along with Tailwind CSS for the UI.
                            </div>
                            <a href="https://github.com/shashidhxr/paytm-app" className="text-orange-500 hover:underline" target="_blank">View on GitHub</a>
                            
                        </div>

                        <div className="mb-4">
                            <h3 className="text-gray-300 text-lg font-semibold">Newz - A news aggregator</h3>
                            <div>
                                
                                <div>Build using Nextjs, tailwindcss</div>
                                <div>Used firebase for database, authenticationa and deployment</div>
                            </div>
                            <a href="https://github.com/shashidhxr/paytm-app" className="text-orange-500 hover:underline" target="_blank">View on GitHub</a> |
                            <a href="https://newz0.vercel.app/" className="text-orange-500 hover:underline ml-2" target="_blank">Live Link</a>
                        </div>

                        <div>
                            <h2 className="text-xl text-orange-500 mt-10">Projects Preview</h2>
                            <Projects ></Projects>
                        </div>  

                        
                    </div>
                </div>
            </div>
        </div>

        // <div className="bg-[#151515] p-50 py-6 h-screen">
        // {/* Container with PNG Image and Yellow Background */}
        // <div className="relative bg-[#ff1179] p-8 m-4">
        //     <div className="absolute inset-0 z-0">
        //         <img src="/app/klipartz.png" alt="logo" />
        //     </div>
        //     {/* Content in front of the image */}
        //     <div className="relative z-10 text-[#e7e502] mx-auto flex flex-col items-center font-bold text-7xl">
        //         Sex Pistols
        //     </div>
        // </div>
        // </div>
    );
}

// #284d72


// #081426 -> 1
// #f17754 -> 2
// #ef6d49
// #ffbc90
// #ffe4bc --> text  
// roboto mono
