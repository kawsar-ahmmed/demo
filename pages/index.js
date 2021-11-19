import Head from "next/head";
import Image from "next/image";
import Navbar from "../Components/Navbar/Navbar";
import HeroSection from "../Components/HeroSection/HeroSection";
import About from "../Components/About/About";
import Galary from "../Components/Gallery/Gallery";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";
import RoadMap from "../Components/RoadMap/RoadMap";
import Particles from "react-tsparticles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sol Era</title>
        <meta name="description" content="‘Sol Era’ is a unique project aiming to bring the past, present, and future of the universe into the Solverse." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />

      <HeroSection />
      <About />

      <Galary />
      <RoadMap />
      <Faq />
      <Footer />
    </>
  );
}
