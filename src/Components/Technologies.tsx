import { use, useState } from "react";
import type { iTechnologyType } from "../Types/TechnologyType";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface TechnologiesProps {
    technologiesPromise: Promise<iTechnologyType[]>
}
export default function Technologies({ technologiesPromise }: TechnologiesProps) {
    const technologies = use(technologiesPromise)
    const [selectedTecnology, setSelectedTecnology] = useState<iTechnologyType[]>([])
    const [isAvailabe, setIsAvailable] = useState<string[]>([]);
    return (
        <div className="px-4">
            <div >
                <h3 className="text-4xl font-extrabold inter">Explore The <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h3>
                <p className="text-[#64748B] plus mt-4">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                <div className="lg:col-span-3 grid grid-cols-1  lg:grid-cols-3 gap-6 items-stretch">
                    {
                        technologies.map(technology => <TechnologyCard 
                            setSelectedTecnology={setSelectedTecnology} 
                            key={technology.id} 
                            technology={technology}
                            isAvailabe={isAvailabe} setIsAvailable={setIsAvailable}></TechnologyCard>)
                    }
                </div>
                <div>
                    <YourStack 
                    selectedTecnology={selectedTecnology} setSelectedTecnology={setSelectedTecnology}
                    isAvailabe={isAvailabe}
                    setIsAvailable={setIsAvailable}></YourStack>
                </div>
            </div>
        </div>
    )
}