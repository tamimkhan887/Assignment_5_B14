import { FaStar } from "react-icons/fa";
import type { iTechnologyType } from "../Types/TechnologyType";

export interface TechnologyCardProps {
    technology: iTechnologyType;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    return (
        <div className="p-5 border border-[#F1F5F9] shadow-sm rounded-2xl h-full flex flex-col">
            <div className="flex justify-between">
                <img
                    src={technology.icon}
                    className="w-10 h-10"
                    alt={technology.name}
                />

                <h3 className="text-[#0EA5E9] bg-[#E0F2FE] rounded-full px-3 pt-3 plus font-semibold text-[11.5px]">
                    {technology.badge}
                </h3>
            </div>

            <h3 className="text-[#0F172A] font-bold text-lg plus mt-5">
                {technology.name}
            </h3>

            <p className="text-[#64748B] plus text-xs mt-2">
                {technology.description}
            </p>

            <hr className="border border-[#d9e3ee81] mt-4 mb-2" />

            <div className="flex justify-between items-center mb-4 mt-auto">
                <p className="text-[#475569] bg-[#F1F5F9] py-0.5 px-2 plus font-medium text-[11px]">
                    {technology.category}
                </p>

                <p className="text-[#64748B] plus font-medium text-[11px]">
                    {technology.difficulty}
                </p>

                <div className="flex items-center gap-2">
                    <FaStar color="#FBBF24" />
                    <p className="text-[#334155] text-[11px] plus font-semibold">
                        {technology.rating}
                    </p>
                </div>
            </div>

            <button className="bg-[#0A0F1D] w-full text-white py-2.5 rounded-lg cursor-pointer plus text-xs font-medium">
                Add To Stack
            </button>
        </div>
    );
};

export default TechnologyCard;