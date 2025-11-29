// app/page.tsx
import Projects from "./components/Projects";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // <-- FIXED: 'weight' instead of 'weights'
});

export default function Home() {
  return (
    <div className={`${robotoMono.className} min-h-screen flex items-center`}>
      <div className="max-w-4xl text-white">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I&apos;m <span className="text-orange-400">Shashidhar Biradar</span>
        </h1>

        {/* About Me */}
        <div className="mb-8">
          <h2 className="text-xl text-orange-500 mb-2">About Me</h2>
          <div className="text-gray-200">
            Aspiring Software Engineer with a strong interest in Cloud and
            Security. I am a full-stack engineer experienced with a flexible
            stack. I have worked on Machine Learning models, Distributed Systems,
            Cloud infrastructure, and full-stack applications.
          </div>
        </div>

        {/* Projects list */}
        <div>
          <h2 className="text-xl text-orange-500 mb-2">Projects</h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Trex – Tech Blogging and Forum Site
            </h3>
            <div className="text-gray-200">
              Built a serverless blogging site with Cloudflare Workers in the
              Hono environment. Implemented PostgreSQL database with Prisma ORM,
              and used React and Tailwind CSS for the frontend. Deployed on
              Vercel.
            </div>
            <a
              href="https://github.com/shashidhxr/trex"
              className="text-orange-500 hover:underline"
              target="_blank"
            >
              View on GitHub
            </a>
            {" | "}
            <a
              href="https://trex0.vercel.app/"
              className="text-orange-500 hover:underline ml-2"
              target="_blank"
            >
              Live Link
            </a>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Payx – Payment and Banking App
            </h3>
            <div className="text-gray-200">
              Built a payment and banking app. Worked on frontend and backend
              technologies, including MySQL and Express.js, along with Tailwind
              CSS for the UI.
            </div>
            <a
              href="https://github.com/shashidhxr/paytm-app"
              className="text-orange-500 hover:underline"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">
              Newz – News Aggregator
            </h3>
            <div className="text-gray-200">
              <div>Built using Next.js and Tailwind CSS.</div>
              <div>Used Firebase for database, authentication and deployment.</div>
            </div>
            <a
              href="https://github.com/shashidhxr/paytm-app"
              className="text-orange-500 hover:underline"
              target="_blank"
            >
              View on GitHub
            </a>
            {" | "}
            <a
              href="https://newz0.vercel.app/"
              className="text-orange-500 hover:underline ml-2"
              target="_blank"
            >
              Live Link
            </a>
          </div>

          <div>
            <h2 className="text-xl text-orange-500 mt-10">Projects Preview</h2>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
