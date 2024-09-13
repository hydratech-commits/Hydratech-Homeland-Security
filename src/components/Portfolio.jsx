import React from "react";
import Aconews from "../assets/acoNews.png";
import Blog from "../assets/blog.png";
import TaskTrek from "../assets/taskhive.png";
import Weather from "../assets/weather.png";
import Reveal from "./Reveal";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className={`container m-auto sm:w-3/4 mt-12 sm:mt-16 sm:mb-16  transition-transform duration-800 ease-in-out`}
    >
      <Reveal>
        <div className="flex justify-center items-center w-full mb-3">
          <hr className=" w-full border border-neutral-300  ml-8" />
          <h2 className="md:text-7xl text-3xl font-bold text-neutral-300  mr-8  w-fit mb-9 ">
            Projects
            <span className=" text-7xl font-extrabold text-lime-400">.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 px-5 gap-10 ">
        <Reveal>
          <div className="hover:border hover:border-lime-500 hover:shadow-md duration-500 hover:cursor-pointer rounded-md md:hover:border-none    p-5">
            <div className=" p-12 pb-0 rounded-md bg-neutral-800 overflow-hidden">
              <img
                src={Aconews}
                alt=""
                className=" hover:cursor-pointer hover:rotate-6  "
              />
            </div>
            <h3 className="text-lg mt-5 font-bold  text-neutral-300">
              AcoNews: A dynamic news aggregator with advanced search and
              filtering.
            </h3>
            <p className="text-neutral-500 text-sm mt-2">
              AcoNews is a dynamic news aggregator application that fetches,
              filters, and displays the latest news articles from various
              sources with a user-friendly interface
            </p>
            <div className="flex justify-evenly mt-8">
              <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-neutral-400 to-cyan-400 hover:text-neutral-900 hover:scale-105 duration-200 hover:opacity-50  rounded-full">
                <a href="https://aconews-a37c8.web.app/" target="blank">
                  Live Preview
                </a>
              </button>
              <button className="sm:px-6 px-3 py-2 border rounded-full hover:border-lime-400 text-neutral-300">
                <a
                  href="https://github.com/sourcebykhalid/ACONEWS-App"
                  target="blank"
                >
                  Checkout Github
                </a>
              </button>
            </div>
          </div>
          <div className="hover:border hover:border-lime-500 hover:shadow-md duration-500 hover:cursor-pointer rounded-md md:hover:border-none    p-5">
            <div className=" p-12 pb-0 rounded-md bg-neutral-800 overflow-hidden">
              {" "}
              <img
                src={Blog}
                alt=""
                className=" hover:cursor-pointer hover:rotate-6  "
              />
            </div>
            <h3 className="text-lg font-bold  text-neutral-300 mt-5">
              BlogBeacon: A Blogging web app
            </h3>
            <p className="text-neutral-500 text-sm mt-2">
              BlogBeacon: Whether you&apos;re a seasoned writer or just
              starting, our app offers a seamless and engaging experience.
            </p>
            <div className="flex justify-evenly mt-3">
              <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-neutral-400 to-cyan-400 hover:text-neutral-900 hover:scale-105 duration-200 hover:opacity-50 rounded-full">
                <a href="https://blogbeacon.vercel.app/" target="blank">
                  Live Preview
                </a>
              </button>
              <button className="sm:px-6 px-3 py-2 border rounded-full hover:border-lime-400 text-neutral-300">
                <a
                  href="https://github.com/sourcebykhalid/Blogbeacon-App"
                  target="blank"
                >
                  Checkout Github
                </a>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="hover:border hover:border-lime-500 hover:shadow-md duration-500 hover:cursor-pointer rounded-md md:hover:border-none    p-5">
            <div className=" p-12 pb-0 rounded-md bg-neutral-800 overflow-hidden">
              {" "}
              <img
                src={TaskTrek}
                alt=""
                className=" hover:cursor-pointer hover:rotate-6  "
              />
            </div>
            <h3 className="text-lg font-bold  text-neutral-300 mt-5">
              TaskTrek: A basic Task tracking app
            </h3>
            <p className="text-neutral-500 text-sm mt-2">
              A Personal portfolio website giving my introduction to people,
              showcasing my skills, and presenting my endeavours which i have
              achieved so far.
            </p>
            <div className="flex justify-evenly mt-3">
              <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-neutral-400 to-cyan-400 hover:text-neutral-900 hover:scale-105 duration-200 hover:opacity-50 rounded-full">
                <a href="https://taskhiveapp.netlify.app/" target="blank">
                  Live Preview
                </a>
              </button>
              <button className="sm:px-6 px-3 py-2 border rounded-full hover:border-lime-400 text-neutral-300">
                <a
                  href="https://github.com/sourcebykhalid/Todo-React/tree/main"
                  target="blank"
                >
                  Checkout Github
                </a>
              </button>
            </div>
          </div>
          <div className="hover:border hover:border-lime-500 hover:shadow-md duration-500 hover:cursor-pointer rounded-md md:hover:border-none    p-5">
            <div className=" p-12 pb-0 rounded-md bg-neutral-800 overflow-hidden">
              <img
                src={Weather}
                alt=""
                className=" hover:cursor-pointer hover:rotate-6  "
              />
            </div>
            <h3 className="text-lg font-bold  text-neutral-300 mt-5">
              Weather Sphere: A Weather forcasting app.
            </h3>
            <p className="text-neutral-500 text-sm mt-2">
              Stay informed with real-time weather updates and forecasts with
              our intuitive weather app
            </p>
            <div className="flex justify-evenly mt-8">
              <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-neutral-400 to-cyan-400 hover:text-neutral-900 hover:scale-105 duration-200 hover:opacity-50 rounded-full">
                <a href="https://weather-sphere-two.vercel.app/" target="blank">
                  Live Preview
                </a>
              </button>
              <button className="sm:px-6 px-3 py-2 border rounded-full hover:border-lime-400 text-neutral-300">
                <a
                  href="https://github.com/sourcebykhalid/weather-sphere/tree/master"
                  target="blank"
                >
                  Checkout Github
                </a>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Portfolio;
