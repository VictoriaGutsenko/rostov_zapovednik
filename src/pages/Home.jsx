import React from "react";
import Hero from "../components/Hero/Hero";
import News from "../components/News/News";
import Events from "../components/Evens/Events";
import Photos from "../components/Photos/Photos";
import Testimonials from "../components/Testimonials/Testimonials";
import Feedback from "../components/Feedback/Feedback";


export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <Events/>
      <Photos/>
      <Testimonials/>
      <Feedback/>
    </>
  );
}
