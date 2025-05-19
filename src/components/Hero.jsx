import { useRef, useState } from "react";
import { curve, heroImage } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine } from "./design/Hero";
import CompanyLogos from "./CompanyLogos";
import ReactPlayer from "react-player";

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      const player = videoRef.current.getInternalPlayer();
      setIsMuted(!isMuted);
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
    }
  };

  return (
    <>
      <Section
        className="pt-[12rem] -mt-[5.25rem] bg-gray-200 text-n-8"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container mx-auto" ref={sectionRef}>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="h1 text-5xl mb-6 font-bold">
                <span className="inline-block relative">
                  ENGAGEHUB
                  <img
                    src={curve}
                    className="absolute top-full left-0 w-full xl:-mt-2"
                    width={624}
                    height={28}
                    alt="Curve"
                  />
                </span>
                <br />
                <br />
                Your Gateway to Smart WhatsApp Marketing and Stellar Reviews
              </h1>
              <p className="body-1 max-w-lg mx-auto lg:mx-0 mb-6 text-n-8">
                Engagehub automates WhatsApp marketing to capture leads, send bulk messages, manage feedback, and boost sales through smart CRM integration.
              </p>
              <div className="mb-5">
                <Button href="./pricing" white>
                  Get Started
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Hero"
                  className="w-[500px] h-auto lg:w-[600px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <Section className="bg-gray-200 text-n-8">
          <div className="container mx-auto mt-8 flex justify-center">
            <div className="relative w-[680px] h-[380px] lg:w-[800px] lg:h-[450px] shadow-xl rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl border-4 border-gray-300 bg-white">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-black opacity-30"></div>
              <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
                <div className="absolute inset-0 border-4 border-white rounded-xl opacity-80"></div>
                <ReactPlayer
                  url="https://www.youtube.com/embed/8GUD4UfU-y4?si=qwJjPy3r4aswtLSQ"
                  playing={true}
                  loop={true}
                  muted={false}
                  controls={false}
                  ref={videoRef}
                  width="100%"
                  height="100%"
                />
                <div className="absolute bottom-4 left-4 flex space-x-4 z-30">
                  <button
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
                    onClick={handleMuteUnmute}
                  >
                    {isMuted ? "Unmute" : "Mute"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <CompanyLogos className="hidden lg:block mt-10" />

        <BottomLine />
      </Section>
    </>
  );
};

export default Hero;
