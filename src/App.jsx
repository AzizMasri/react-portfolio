import About from "./assets/components/About"
import Contact from "./assets/components/Contact"
import Experience from "./assets/components/Experience"
import Footer from "./assets/components/Footer"
import Hero from "./assets/components/Hero"
import Navbar from "./assets/components/Navbar"
import Projects from "./assets/components/Projects"
import Reviews from "./assets/components/Reviews"

const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Navbar />  
        <Hero />
        <About />
        <Projects />
        <Reviews />
        <Experience />
        {/* <Contact /> */}
        <Footer />
      </main>
    </>
  )
}

export default App