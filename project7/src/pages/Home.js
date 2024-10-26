import React from "react";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import OurRooms from "../components/OurRooms";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
//import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <InfoBar />
      <OurRooms />
      <Feature />
      <Testimonial />
      <Footer company="IDB-BISEW" established="1952" />
    </>
  );
}
