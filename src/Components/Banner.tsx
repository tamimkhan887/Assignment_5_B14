import banner from "../assets/banner-stack.png"
export default function Banner() {

    return (
        <div className="flex flex-col lg:flex-row  justify-between mt-12 md:mt-19 items-center px-4">
            <div>
                <h3 className="text-[#0F172A] inter font-bold md:font-extrabold text-[30px] md:text-6xl  text-center md:text-start">Build Your Ideal <br /><span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent"> Development Stack</span></h3>
                <p className="text-[#475569] text-lg plus mt-4 md:mt-6 mb-6 md:mb-10 text-center md:text-start">Explore frontend, backend, database, and tooling options,<br className="hidden md:flex"/>compare them side by side, and put together the stack that fits your <br className="hidden md:flex" /> next project.</p>
                <div className="space-x-5 space-y-6 text-center md:text-start">
                    <button className="bg-linear-to-r from-[#F97316] to-[#EC4899] py-3 px-5 inter font-semibold text-sm text-white rounded-lg cursor-pointer">Explore Technologies</button>
                    <button className="inter text-sm text-[#374151] border border-[#E5E7EB] rounded-lg py-3 px-14 cursor-pointer">Learn More</button>
                </div>
            </div>
            <img src={banner} alt="" />
        </div>
    )
}