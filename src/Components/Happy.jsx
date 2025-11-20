import React,{useEffect} from 'react'
import happyImage from "../Images/positive-emotions-portrait-happy-young-dark-skinned-man-with-afro-haircut-casual-stylish-outfit-spreading-hands-with-excitement-screaming-cheering-favorite-football-team (1).webp"
import gsap from "gsap";
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Happy = () => {

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  document.fonts.ready.then(() => {
    const header1 = new SplitText(".header1", {
      type: "lines",
      autoSplit: true,
      mask: "lines",
    });

    const header2 = new SplitText(".header2", {
      type: "lines",
      autoSplit: true,
      mask: "lines",
    });

    // Animate Header 1
    gsap.from(header1.lines, {
      y: 30,
      opacity: 0,
      ease: "sine.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".header1",
        start: "top 65%",
        end: "top center",
        markers: true,
      }
    });

    // Animate Header 2
    gsap.from(header2.lines, {
      y: -30,
      opacity: 0,
      ease: "sine.inOut",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".header2",
        start: "top 80%",
        end: "top center",
        markers: true,
      }
    });

  });
}, []);

  return (
    <section className="min-h-screen p-6 relative bg-teal-500 flex flex-col justify-center mt-[12em] items-center">
    	<div className="absolute w-full h-full bg-white -top-[12em] -z-10"></div>
      <div className="absolute -top-[5.2em] bg-white shadow-lg w-[36em] h-[20em] rounded-lg">
    	</div>
        <img src={happyImage} alt="happy image"  className="absolute -top-[22.5em] w-2/3 "/>

        <h2 className="text-8xl header1 z-20 syncopate-bold text-white leading-11 tracking-tighter mt-[1.6em] ml-2">Happy customers</h2>
        <h2 className="text-8xl header2 z-20 poppins-regular text-white">Reliable.<span className=" text-8xl syncopate-bold tracking-tighter">services</span></h2>

        <div className="absolute p-2 -bottom-7 w-12 h-20 rounded-full bg-teal-500 border-[8px] border-white flex justify-center ">
          <svg className xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="34px" fill="#"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/></svg>
        </div>
        <div className="absolute z-10 overflow-hidden opacity-60 -right-[16em] w-[30em] h-[30em] bg-transparent z-10 border-[2em] border-black rounded-full"></div>
        <div className="absolute z-10 overflow-hidden opacity-60 -right-[12em] w-[38em] h-[38em] bg-transparent z-10 border-[2em] border-black rounded-full"></div>

    </section>
  )
}

export default Happy;