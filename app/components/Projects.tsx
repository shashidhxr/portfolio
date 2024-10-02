import Image from 'next/image';

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-8 max-w-4xl mx-auto">
            <a className="flex flex-col justify-between bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-4 h-60" href="https://www.hystruct.com">
                <div className="relative rounded-xl mb-2 shadow-project h-36">
                    <Image 
                        alt="Hystruct Project Image" 
                        width={450} 
                        height={240} 
                        className="rounded-xl object-cover" 
                        src="/hystruct.png" 
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-slate-700 font-semibold tracking-tight text-xl">Hystruct</h3>
                    <h3 className="text-slate-500 text-base">
                        Scrape structured data from the web with AI
                    </h3>
                </div>
            </a>

            <a className="flex flex-col justify-between bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-4 h-60" href="https://glow.as">
                <div className="relative rounded-xl mb-2 shadow-project h-36">
                    <Image 
                        alt="Glow Project Image" 
                        width={450} 
                        height={240} 
                        className="rounded-xl object-cover" 
                        src="/glow.png" 
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-slate-700 font-semibold tracking-tight text-xl">Glow</h3>
                    <h3 className="text-slate-500 text-base">
                        A super simple way to create beautiful personal landing pages.
                    </h3>
                </div>
            </a>

            <a className="flex flex-col justify-between bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-4 h-60" href="https://flagdb.com">
                <div className="relative rounded-xl mb-2 shadow-project h-36">
                    <Image 
                        alt="FlagDB Project Image" 
                        width={450} 
                        height={240} 
                        className="rounded-xl object-cover" 
                        src="/flagdb.png" 
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-slate-700 font-semibold tracking-tight text-xl">FlagDB</h3>
                    <h3 className="text-slate-500 text-base">A personal project to build a database of flags from around the world</h3>
                </div>
            </a>

            <a className="flex flex-col justify-between bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-4 h-60" href="https://github.com/alexpate/awesome-design-systems">
                <div className="relative rounded-xl mb-2 shadow-project h-36">
                    <Image 
                        alt="Awesome Design Systems Project Image" 
                        width={450} 
                        height={240} 
                        className="rounded-xl object-cover" 
                        src="/awesome-design-systems.png" 
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-slate-700 font-semibold tracking-tight text-xl">Awesome Design Systems</h3>
                    <h3 className="text-slate-500 text-base">A curated list of design systems</h3>
                </div>
            </a>
        </div>
    );
}
