import React from 'react';
import HeroBox from '../components/HeroBox';
import Advantages from '../components/Advantages';
import Pricing from '../components/Pricing';
import Numbers from '../components/Numbers';

function LandingPage() {
  return (
    <div>
      {/* name, slogan and description with background image */}
      <HeroBox />

      {/* Advantages with icons */}
      <Advantages />

      {/* prices section */}
      <span id='pricing-sec' /> 
      <br/>
      <br/>
      <br/>
      <Pricing />

      {/* Validating numbers section */}
      <span id='number-sec' /> 
      <br/>
      <br/>
      <br/>
      <Numbers />


      {/* success stoires */}
      {/* <span id='featured-success-sec' /> 
      <br/>
      <br/>
      <br/>
      <FeaturedSuccessStories /> */}
      
    </div>
  )
}

export default LandingPage