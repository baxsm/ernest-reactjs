import BannerCarousel from "../components/landingPage/BannerCarousel"
import Projects from "../components/landingPage/Projects"
import Welcome from "../components/landingPage/Welcome"


const LandingPage = () => {
  return (
    <div className="bg-black">
        <BannerCarousel />
        <Welcome />
        <Projects />
    </div>
  )
}

export default LandingPage