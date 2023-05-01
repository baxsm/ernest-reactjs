import BannerCarousel from "../components/landingPage/BannerCarousel"
import Clients from "../components/landingPage/Clients"
import Projects from "../components/landingPage/Projects"
import Welcome from "../components/landingPage/Welcome"


const LandingPage = () => {
  return (
    <div className="bg-black">
        <BannerCarousel />
        <Welcome />
        <Projects />
        <Clients />
    </div>
  )
}

export default LandingPage