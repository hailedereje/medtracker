import React from "react";
import Hero from "../Components/Home/Hero";
import HeroCard from "../Components/Home/HeroCard";
import News from "../Components/Home/News";
import Services from "../Components/Home/Services";
import Order from '../Components/Home/Order'

function Home() {
  return (
    <div data-testid="home">
      <Hero/>
      <HeroCard/>
      <Order/>
      <Services/>
      <News/>
    </div>
  );
}

export default Home;
