import type { Dispatch, SetStateAction } from "react"
import type { iTechnologyType } from "../Types/TechnologyType"
import SelectedTech from "./SelectedTech"
import { toast } from "react-toastify"

interface YourStackProps {
    selectedTecnology: iTechnologyType[]
    setSelectedTecnology: Dispatch<SetStateAction<iTechnologyType[]>>
    isAvailabe: string[]
    setIsAvailable: Dispatch<SetStateAction<string[]>>
}

export default function YourStack({
    selectedTecnology,
    setSelectedTecnology,
    isAvailabe,
    setIsAvailable
}: YourStackProps) {
    const handleDelete = (id: string): void => {
        const filterArray = selectedTecnology.filter(sT => sT.id !== id)
        const filterAvailable = isAvailabe.filter(iA => iA !== id)
        toast(`${id} removed from your stack`)
        setIsAvailable(filterAvailable)
        setSelectedTecnology(filterArray)
    }
    const handleDeleteAll = () => {
        if (selectedTecnology.length > 0) {
            setSelectedTecnology([])
            setIsAvailable([])
            toast("All Technology Removed Successfully")
        }else{
            toast.error("No technology to delete")
        }
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

            <div onClick={() => handleDeleteAll()} className="text-center w-full border border-[#ED8C85] rounded-lg py-2">
                <button className="text-[#D82C20] font-semibold text-sm cursor-pointer">Remove All</button>
            </div>
        </div>
    )
}
