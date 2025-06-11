import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import AnimatedBtn from "../components/SVG_LoGo/AnimatedBtn";
import Linkedin from "../components/SVG_LoGo/Linkedin";
import Instagram from "../components/SVG_LoGo/Instagram";
import Github from "../components/SVG_LoGo/Github";
import SparkleIcon from "../components/SVG_LoGo/SparkleIcon";
import webdev from "../assets/webdev.gif";
import projectLogo from "../assets/projectLogo.png";
import mail from "../assets/mail.svg";
import profile from "../assets/profile.jpeg";
import CodeSVG from "../components/SVG_LoGo/CodeSVG";
import AwardSVG from "../components/SVG_LoGo/AwardSVG";
import {
  HtmlLogo,
  CssLogo,
  JavaScriptLogo,
  ReactLogo,
  JavaLogo,
  PythonLogo,
  TailwindLogo,
  DjangoLogo,
  CPlusPlusLogo,
} from "../assets/ProgramLangIMGExport";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative overflow-x-hidden w-full sm:px-6 md:px-10 bg-[#001f3f] backdrop-blur-2xl ">
      {/* Hero Section */}
      <section className=" mt-16 w-full text-white relative px-4">
        <div className="flex flex-col md:flex-row w-full p-4 justify-between items-center ">
          {/* Left */}
          <div className="lg:pl-5 gap-y-3 flex flex-col w-full md:w-1/2 p-2 text-white">
            <h1 className="text-5xl font-bold mb-2" data-aos="fade-right">
              Hi
            </h1>
            <h1 className="text-5xl font-bold mb-2" data-aos="fade-left">
              I'm <span className="text-amber-400">Shiv Kant</span>
            </h1>
            <h1 className="text-3xl font-semibold" data-aos="fade-right">
              Full Stack Developer
            </h1>
            <p className="mt-4 text-lg" data-aos="fade-left">
              Problem solver passionate about React , JavaScript, , Java, Python
              and full-stack development using Django. MCA graduate building
              efficient and impactful solutions.
            </p>

            {/* Tech Buttons */}
            <div
              className="flex flex-wrap gap-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-8 mt-2"
              data-aos="fade-right"
            >
              <AnimatedBtn label={"JavaScript"} />
              <AnimatedBtn label={"React"} />
              <AnimatedBtn label={"Tailwind"} />
              <AnimatedBtn label={"Java"} />
            </div>

            {/* Links */}
            <div
              data-aos="fade-left"
              className="mt-6 flex flex-col sm:flex-row gap-4"
            >
              <div className="group hover:scale-110 transition-all duration-200 px-8 py-2 font-semibold bg-gradient-to-r hover:from-[#2abfff] hover:to-[#0071FF] hover:bg-gradient-to-r from-[#ffee00] to-[#ffb300] text-black rounded-lg">
                <Link to="https://github.com/shivkantx">
                  Projects{" "}
                  <img src={projectLogo} className="inline-block w-5 group-hover:rotate-15" alt="" />
                </Link>
              </div>
              <div className="group hover:scale-110 transition-all duration-200 px-8 py-2 font-semibold bg-gradient-to-r hover:from-[#2abfff] hover:to-[#0071FF] hover:bg-gradient-to-r from-[#ffee00] to-[#ffb300] text-black rounded-lg">
                <Link to="/contact">
                  Contact{" "}
                  <img src={mail} className="group-hover:rotate-15 inline-block w-4 " alt="" />
                </Link>
              </div>
            </div>

            {/* Socials */}
            <div className="flex pl-3 mt-10 space-x-6">
              <Linkedin />
              <Github />
              <Instagram />
            </div>
          </div>

          {/* Right - Image */}
          <div
            data-os="slide-left"
            className=" w-full h-auto md:w-1/2 mt-3 flex justify-center"
          >
            <img
              src={webdev}
              alt="Shiv profile"
              className="transform origin-bottom-left hover:-translate-y-2 hover:translate-x-2 transition duration-300 ease-in-out shadow-md"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className=" w-full p-6 text-white">
        <div className="flex flex-col items-center p-4  justify-between">
          <h1
            className="text-4xl font-black from-pink-300 bg-gradient-to-r to-teal-500 via-purple-500 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            About Me
          </h1>

          {/* Sparkle Row */}
          <div className="flex items-center space-x-2 mt-2 " data-aos="fade-up">
            <SparkleIcon />
            <p className="  font-medium text-lg md:text-base">
              Transforming ideas into digital experiences
            </p>
            <SparkleIcon />
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row mt-10 gap-10 w-full items-center justify-center px-4">
            {/* Left */}
            <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left text-white space-y-4">
              <h2 className="text-5xl font-extrabold" data-aos="fade-right">
                Hello, I'm <br />
                <span>Shiv Kant</span>
              </h2>
              <p
                data-aos="fade-left"
                className="text-justify text-lg font-extralight"
              >
                I'm a Full Stack Developer passionate about crafting modern,
                efficient, and scalable applications. My core Core Java, Python,
                Django, HTML, CSS, JavaScript, MySQL, DBMS, Operating System,
                DSA, GitHub, Django. I enjoy bringing designs to life and
                solving real-world problems with code.
              </p>
              <p data-aos="fade-left" className="text-justify">
                Beyond development, I’m curious, enthusiastic, and always
                learning something new!
              </p>
              <div
                data-aos="fade-left"
                className="mt-6 flex flex-col sm:flex-row gap-4"
              >
                <div className=" hover:scale-110 transition-all duration-200 px-8 py-2 font-semibold bg-gradient-to-r hover:from-[#2abfff] hover:to-[#0071FF] hover:bg-gradient-to-r from-[#ffee00] to-[#ffb300] text-black rounded-lg">
                  <Link to="https://drive.google.com/file/d/1mrf5yWbkYLEIyRYUPZEEWpydTfnq9zqb/view?usp=drive_link">
                    <svg
                      class="w-6 h-5 inline-block text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                      />
                    </svg>
                    &nbsp; Download CV
                  </Link>
                </div>
                <div className="group hover:scale-110 transition-all duration-200 px-8 py-2 font-semibold bg-gradient-to-r hover:from-[#2abfff] hover:to-[#0071FF] hover:bg-gradient-to-r from-[#ffee00] to-[#ffb300] text-black rounded-lg">
                  <Link to="https://github.com/shivkantx">
                    <CodeSVG className="group-hover:rotate-15"/>
                    &nbsp; View Projects
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2 pt-4 w-full md:w-1/2 flex justify-center">
              <img
                src={profile}
                alt="Shiv profile"
                className="hover:scale-120 transition-all duration-200 rounded-full shadow-md w-[60%] md:max-w-sm lg:max-w-md object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        {/* Card section */}
        <div className="mt-[50px] flex flex-wrap gap-x-5 gap-y-5">
  {/* card 1 */}
  <div
    data-aos="fade-right"
    className="group w-full lg:w-[32%] rounded-lg flex flex-col bg-gray-300/20 backdrop-blur-lg p-5 gap-y-5 transition-all duration-200 hover:scale-105 hover:bg-gray-300/35"
  >
    <div className="flex justify-between">
      <div className="group-hover:rotate-15 transition-all flex rounded-full justify-center bg-gray-500/40 items-center h-[60px] w-[60px]">
        <CodeSVG />
      </div>
      <div>
        <h1 data-aos="fade-left" className="text-4xl font-extrabold">
          4
        </h1>
      </div>
    </div>
    <div className="flex justify-between">
      <div>
        <h1 data-aos="fade-up" className="text-md font-semibold">
          TOTAL PROJECTS
        </h1>
        <p data-aos="fade-up" className="text-xs">
          Innovative web solutions crafted
        </p>
      </div>
      <div className="flex items-end justify-end">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
      </div>
    </div>
  </div>

  {/* card 2 */}
  <div
    data-aos="fade-up"
    className="w-full lg:w-[32%] rounded-lg flex flex-col bg-gray-300/20 backdrop-blur-lg p-5 gap-y-5 transition-all duration-200 hover:bg-gray-300/35 hover:scale-105"
  >
    <div className="flex justify-between group">
      <div className="flex group-hover:rotate-15 rounded-full justify-center bg-gray-500/40 items-center h-[60px] w-[60px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M8 16l4-2 4 2v4l-4-2-4 2v-4z" />
        </svg>
      </div>
      <div>
        <h1 data-aos="fade-left" className="text-4xl font-extrabold">
          2
        </h1>
      </div>
    </div>
    <div className="flex justify-between">
      <div>
        <h1 data-aos="fade-up" className="font-semibold">
          CERTIFICATES
        </h1>
        <p data-aos="fade-up" className="text-xs">
          Professional skills validated
        </p>
      </div>
      <div className="flex items-end justify-end">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
      </div>
    </div>
  </div>

  {/* card 3 */}
  <div
    data-aos="fade-left"
    className="group w-full lg:w-[32%] rounded-lg flex flex-col bg-gray-300/20 backdrop-blur-lg p-5 gap-y-5 transition-all duration-200 hover:bg-gray-300/35 hover:scale-105"
  >
    <div className="flex justify-between">
      <div className="group-hover:rotate-15 flex rounded-full justify-center bg-gray-500/40 items-center h-[60px] w-[60px]">
        <svg
          className="text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20a15.3 15.3 0 0 1 0-20z" />
        </svg>
      </div>
      <div>
        <h1 data-aos="fade-left" className="text-4xl font-extrabold">
          3
        </h1>
      </div>
    </div>
    <div className="flex justify-between">
      <div>
        <h1 data-aos="fade-up" className="font-semibold">
          YEARS OF EXPERIENCE
        </h1>
        <p data-aos="fade-up" className="text-xs">
          Continuous learning journey
        </p>
      </div>
      <div className="flex items-end justify-end">
        <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
        </svg>
      </div>
    </div>
  </div>
</div>

      </section>

      {/* portfolio Section */}
      <section className="bg-blue-600 relative my-[50px] text-white">
        <div className="p-5 bg-blue-950 ">
          <div className="flex flex-col items-center justify-between  md:w-full p-3">
            <h1
              data-aos="fade-left"
              className="text-3xl font-black text-transparent bg-gradient-to-r from-[#671beb] to-purple-900 bg-clip-text"
            >
              Portfolio Showcase
            </h1>
            <p data-aos="fade-right" className="lg:w-[50%] text-center">
              Explore my journey through projects, certifications, and technical
              expertise. Each section represents a milestone in my continuous
              learning path.
            </p>
          </div>

          <div className="mt-[50px] bg-blue-400 p-3 rounded-lg space-y-3">
            <ul className="flex flex-row space-x-3 justify-center items-center md:flex-row">
              <li className="flex flex-col md:flex-row-reverse w-1/3 bg-purple-950 py-6 p-3 rounded-lg justify-center items-center gap-2">
                <CodeSVG />
                <p>Project</p>
              </li>

              <li className="flex flex-col md:flex-row-reverse w-1/3 bg-purple-950 py-6 p-3 rounded-lg justify-center items-center gap-2">
                <p>Certificate</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M8 16l4-2 4 2v4l-4-2-4 2v-4z" />
                </svg>{" "}
              </li>

              <li className="flex flex-col md:flex-row-reverse w-1/3 bg-purple-950 py-6 p-3 rounded-lg justify-center items-center gap-2">
                <p>Tech Stack</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-boxes MuiTab-iconWrapper MuiTab-icon mb-2 w-5 h-5 transition-all duration-300"
                >
                  <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
                  <path d="m7 16.5-4.74-2.85"></path>
                  <path d="m7 16.5 5-3"></path>
                  <path d="M7 16.5v5.17"></path>
                  <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
                  <path d="m17 16.5-5-3"></path>
                  <path d="m17 16.5 4.74-2.85"></path>
                  <path d="M17 16.5v5.17"></path>
                  <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
                  <path d="M12 8 7.26 5.15"></path>
                  <path d="m12 8 4.74-2.85"></path>
                  <path d="M12 13.5V8"></path>
                </svg>
              </li>
            </ul>

            <div className="bg-gray-800 group p-5 text-white rounded-xl grid grid-cols-1 sm:grid-cols-3 xs:grid-col3 md:grid-cols-4 xl:grid-cols-6 gap-6">
              {[
                { logo: PythonLogo, label: "Python", aos: "fade-left" },
                { logo: CssLogo, label: "CSS", aos: "fade-up" },
                { logo: JavaScriptLogo, label: "JavaScript", aos: "fade-left" },
                { logo: ReactLogo, label: "React", aos: "fade-right" },
                { logo: JavaLogo, label: "Java", aos: "fade-up" },
                { logo: PythonLogo, label: "Python", aos: "fade-left" },
                { logo: TailwindLogo, label: "Tailwind", aos: "fade-right" },
                { logo: DjangoLogo, label: "Django", aos: "fade-up" },
                { logo: CPlusPlusLogo, label: "C++", aos: "fade-left" },
              ].map(({ logo, label, aos }, index) => (
                <div
                  key={index}
                  data-aos={aos}
                  className="gradient-border-card   relative m-auto p-8 backdrop-blur-lg bg-gray-400/10 rounded-lg items-center justify-center text-center space-y-2 transition-all duration-00 hover:backdrop-blur-lg hover:bg-gray-500/50 hover:scale-110"
                >
                  <img src={logo} alt={label} className="h-[90px] w-[90px]" />
                  <p className="font-bold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="w-full p-6 mb-[50px] text-white bg-[#072854]"> 

        <div className="flex flex-col gap-4 md:flex-row justify-center items-center "> 
          {/* Form 1 */}
          <div className="md:w-1/3 rounded-lg w-full p-2 backdrop-blur-3xl bg-purple-800/30">
             <div className="w-full flex justify-between items-center font-extrabold text-[#] p-2">
              <div>
                <h1 className="text-4xl ">Get in Touch</h1>
                <p className="pl-1 text-sm">Have something to discuss? send me a message and let's talk</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  width="24" 
                  height="24">
                
                <circle cx="6" cy="12" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="18" cy="18" r="2" />

                <line x1="7.5" y1="11" x2="16.5" y2="7" />
                <line x1="7.5" y1="13" x2="16.5" y2="17" />
              </svg>


              </div>
             </div> 
            {/* Inputs  */}
             <div className="px-5 py-3 space-y-8 flex flex-col text-white"> 
              <input 
                type="text"  
                className="backdrop-blur-3xl w-full focus:outline-2 outline-white/20 bg-gray-950/10 rounded-lg p-2"
                placeholder="Your name" />
              <input 
                type="text"  
                className="backdrop-blur-3xl w-full focus:outline-2 outline-white/20 bg-gray-950/10 rounded-lg p-2"
                placeholder="enter your mail" />
              <textarea
                rows="4"    
                className="backdrop-blur-3xl w-full focus:outline-2 outline-white/20 bg-gray-950/10 rounded-lg p-2"
                placeholder="Your message" />

              <button className="group bg-gradient-to-r from-pink-500 via-blue-500 to-pink-500 group hover:bg-gradient-to-l hover:via-blue-500 hover:from-purple-500 hover:to-purple-500  p-3 flex items-center transition-all hover:scale-105 duration-200 justify-center space-x-2 text-sm font-semibold rounded-4xl">
                  <svg
                    className="group-hover:rotate-45 transition-all duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    width="20"
                    height="20"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                <p>send message</p></button>
              

             </div>


          </div>

          {/* form 2 */}
          <div className="w-2/3 p-2 bg-green-200">


          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
