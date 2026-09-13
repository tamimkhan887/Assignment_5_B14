import { Suspense, useState } from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies";
import type { iTechnologyType } from "./Types/TechnologyType";
import { HashLoader } from "react-spinners";
import Footer from "./Components/Footer";

export default function App() {
  const technologiesFetch = async (): Promise<iTechnologyType[]> => {
    const res = await fetch("data.json")
    const data = await res.json()
    return data
  }

  const [technologiesPromise] = useState(() => technologiesFetch())

  return (
    <div>
      <div className="border-b-2 border-[#F1F5F9] sticky top-0 z-50 bg-white">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto">
        <Banner></Banner>
        <Suspense fallback={<HashLoader color="#36d7b7" />}>
          <Technologies technologiesPromise={technologiesPromise}></Technologies>
        </Suspense>
      </div>
      <div className="border shadow-sm border-[#F1F5F9] mt-20">
        <Footer></Footer>
      </div>
    </div>
  )
}