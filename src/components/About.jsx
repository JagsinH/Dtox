import React, { useEffect, useState } from 'react';
import { Circle } from 'lucide-react';

const FloatingElement = ({ children, delay }) => {
  return (
    <div 
      className="absolute animate-bounce"
      style={{ 
        animationDuration: '3s',
        animationDelay: `${delay}s`,
        animationIterationCount: 'infinite'
      }}
    >
      {children}
    </div>
  );
};


const DecorativeCircle = ({ size, className }) => (
  <div 
    className={`rounded-full border-2 border-current ${className}`}
    style={{ width: size, height: size }}
  />
);

const About = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
    
      <div className="absolute inset-0 opacity-10">
        <FloatingElement delay={0}>
          <Circle className="text-blue-300" size={40} style={{ top: '10%', left: '10%' }} />
        </FloatingElement>
        <FloatingElement delay={1}>
          <DecorativeCircle className="text-purple-300" size={40} style={{ top: '30%', right: '20%' }} />
        </FloatingElement>
        <FloatingElement delay={2}>
          <Circle className="text-green-300" size={30} style={{ bottom: '20%', left: '15%' }} />
        </FloatingElement>
        <FloatingElement delay={1.5}>
          <DecorativeCircle className="text-blue-300" size={25} style={{ bottom: '40%', right: '10%' }} />
        </FloatingElement>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-white p-8">
       
        <div className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 py-4">
            Welcome to DTOX – Your Digital Sanctuary
          </h1>
          <p className="text-lg text-gray-300 text-center leading-relaxed">
            In today's fast-paced world, digital chaos can sometimes feel overwhelming. At DTOX, we believe that technology should soothe, not stress. Our mission is simple: to reduce pressure and offer you a moment of genuine peace through a thoughtfully designed, relevant user interface.
          </p>
        </div>

       
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-300">Our Mission</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl">
            <p className="text-gray-300 leading-relaxed">
              We're here to create a digital oasis—a place where every interaction is engineered to provide clarity, calm, and a breath of fresh air. Whether you're taking a quick break or immersing yourself in our streamlined design, DTOX is all about helping you reclaim your inner balance.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-purple-300">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Calm-First UI",
                content: "Every element of our interface is crafted with care. Minimalistic design meets functionality, ensuring that your experience is both visually pleasing and effortlessly intuitive."
              },
              {
                title: "Stress-Relief at a Glance",
                content: "Our platform is your go-to space for a momentary escape. Each click is designed to minimize clutter and maximize serenity, allowing you to refocus and recharge."
              },
              {
                title: "Integrated Media Experience",
                content: "Beyond an intuitive UI, DTOX enriches your journey by providing a carefully curated selection of media. From soothing soundscapes and ambient music to calming visuals and guided meditations, our media offerings are designed to deepen your sense of relaxation and help you unwind effectively."
              },
              {
                title: "User-Centric Philosophy",
                content: "We understand the pressures of modern life. That's why we're constantly refining our digital environment to make it as supportive and stress-free as possible."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl hover:transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-4 text-blue-300">{feature.title}</h3>
                <p className="text-gray-300">{feature.content}</p>
              </div>
            ))}
          </div>
        </div>

      
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-300">Our Vision</h2>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl">
            <p className="text-gray-300 leading-relaxed">
              DTOX is more than just a website—it's a movement towards a more mindful digital experience. We envision a future where every digital interaction leaves you feeling more centered, more connected, and more at peace.
            </p>
          </div>
        </div>

       
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-300">Join Us on This Journey</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Step into DTOX and discover how a well-crafted user interface, combined with enriching media, can transform your digital experience. Let us help you find that perfect moment of calm amidst the daily rush. Here, simplicity meets serenity, and every detail is designed with your peace of mind in focus.
          </p>
          <p className="text-2xl font-bold text-blue-300">
            Thank you❤️ for choosing DTOX. Your journey to a more balanced digital life starts here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;