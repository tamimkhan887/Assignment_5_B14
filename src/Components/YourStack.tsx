import type { Dispatch, SetStateAction } from "react"
import type { iTechnologyType } from "../Types/TechnologyType"
import SelectedTech from "./SelectedTech"
import { toast } from "react-toastify"

interface YourStackProps {
    selectedTecnology: iTechnologyType[]
    setSelectedTecnology: Dispatch<SetStateAction<iTechnologyType[]>>
}

export default function YourStack({
    selectedTecnology,
    setSelectedTecnology
}: YourStackProps) {
    const handleDelete = (id:string):void =>{
        const filterArray = selectedTecnology.filter(sT => sT.id !== id)
        toast(`${id} removed from your stack`)
        setSelectedTecnology(filterArray)
    }
    return (
        <div className="border border-[#F1F5F9] p-5 rounded-2xl shadow">
            <div>
                <h3 className="text-[#0F172A] plus font-bold">
                    Your Stack
                </h3>

                <p className="plus text-sm text-[#94A3B8] mt-1">
                    {
                        selectedTecnology.length === 0 ? "No Technology Selected Yet." : `${selectedTecnology.length} Technology Selected`
                    }
                </p>
            </div>

            {selectedTecnology.length === 0 ? (
                <div className="border border-[#E2E8F0] p-6 mt-3 rounded-2xl border-dashed plus text-sm text-[#94A3B8]">
                    <h3 className="text-center">
                        Your Stack is empty
                    </h3>
                </div>
            ) : (
                selectedTecnology.map(selectedTech => (
                    <SelectedTech
                        key={selectedTech.id}
                        selectedTech={selectedTech}
                        handleDelete={handleDelete}
                    />
                ))
            )}
        </div>
    )
}
