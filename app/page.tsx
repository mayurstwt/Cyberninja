import { BentoDemo } from "@/components/Bento"
import Companies from "@/components/Companies-logo"
import Hero from "@/components/Hero"

const Home = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[90rem] mx-auto">
        <Hero/>
        <Companies/>
        <BentoDemo/>
      </div>
    </div>
  )
}

export default Home