import React from 'react';
import { Button } from './ui/button';
import BlurText from "./content-title";

function Content() {
  const handleAnimationComplete = () => {
    console.log('Animation completed');
  };

  return (
      <div className="h-[800px] w-screen">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-center pt-[50px]">
            <BlurText
              text="Whose gonna carry the boats and the logs!!!"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl text-white font-extrabold mb-8 white-shadow"
            />
          </div>
          <div className="mt-4 pt-[450px]">
            <Button size="lg">Explore more</Button>
          </div>
        </div>
      </div>
  );
}

export default Content;