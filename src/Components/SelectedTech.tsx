import { RxCross1 } from "react-icons/rx"
import type { iTechnologyType } from "../Types/TechnologyType"

export interface SelectedTechProps {
    selectedTech: iTechnologyType
    handleDelete: (id:string)=>void
}

export default function SelectedTech({ selectedTech , handleDelete }: SelectedTechProps) {
    return (
        <div className="flex justify-between items-center border border-[#E2E8F0] p-3 rounded-lg mt-2">
            <div className="flex items-center gap-2">
                <img src={selectedTech.icon} alt="" className="w-7 h-7" />
                <div>
                    <h3 className="plus font-bold text-[10px] text-[#0F172A]">{selectedTech.name}</h3>
                    <p className="font-bold plus text-[#94A3B8] text-[6px]">{selectedTech.badge}</p>
                </div>
            </div>
            <button onClick={()=>handleDelete(selectedTech.id)}>
                <RxCross1 size={24} color="#94A3B8"/>
            </button>
        </div>
    )
}