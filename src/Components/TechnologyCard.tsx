
import { FaStar } from "react-icons/fa";
import type { iTechnologyType } from "../Types/TechnologyType";
import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

export interface TechnologyCardProps {
    technology: iTechnologyType;
    selectedTecnology: iTechnologyType[];
    setSelectedTecnology: Dispatch<SetStateAction<iTechnologyType[]>>
    isAvailabe: string[]
    setIsAvailable: Dispatch<SetStateAction<string[]>>
}

const TechnologyCard = ({
    technology,
    selectedTecnology,
    setSelectedTecnology,
    isAvailabe, setIsAvailable
}: TechnologyCardProps) => {
    const isAdded = isAvailabe.includes(technology.id);
    const handleStack = () => {
        toast.success(`${technology.name} Added To Your Stack`)
        setSelectedTecnology([...selectedTecnology, technology]);
        setIsAvailable([...isAvailabe, technology.id]);
    };

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

            <button
                onClick={handleStack}
                disabled={isAdded}
                className={`w-full py-2.5 rounded-lg plus text-xs font-semibold ${
                    isAdded
                        ? "bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0] cursor-not-allowed"
                        : "bg-[#0A0F1D] text-white hover:bg-[#1E293B] cursor-pointer"
                }`}
            >
                {isAdded ? "✓ Added To Stack" : "Add To Stack"}
            </button>
        </div>
    );
};

export default TechnologyCard;

