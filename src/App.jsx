import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Information from "./components/Information"
import Topic from "./components/Topic"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Information/>
      <Topic />
      <Footer />
    </>
  )
}

export default App