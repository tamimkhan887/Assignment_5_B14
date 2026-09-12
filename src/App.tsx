import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import type { iTechnologyType } from "./Types/TechnologyType";

export default function App() {
  const technologiesFetch = async():Promise<iTechnologyType> =>{
    const res = await fetch("data.json")
    const data = await res.json()
    return data
  }

  return (
    <div>
      <div className="border-b-2 border-[#F1F5F9]">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto">
          <Banner></Banner>
      </div>
    </div>
  )
}