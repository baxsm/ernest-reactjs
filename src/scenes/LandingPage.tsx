import BannerCarousel from "../components/landingPage/BannerCarousel"
import Clients from "../components/landingPage/Clients"
import Contact from "../components/landingPage/Contact"
import Projects from "../components/landingPage/Projects"
import Welcome from "../components/landingPage/Welcome"


const LandingPage = () => {
  return (
    <div className="bg-black">
        <BannerCarousel />
        <Welcome />
        <Projects />
        <Clients />
        <Contact />
        <div className="mb-20"></div> {/* Footer Space */}
    </div>
  )
}

export default LandingPage