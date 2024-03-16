import React from "react";

function Landing() {
  return (
    <div className="relative  w-full  h-[200vh] sm:h-[300vh] ">
      <div className="w-full h-full picture">
        <img
          className="object-cover w-full h-full"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className=" px-5 mx-auto text-white mt-72 sm:mt-[30rem] text-md text max-w-screen-2xl sm:px-10">
          <div className="sm:text-3xl">
            <p>Global digital design studio partnering</p>
            <p>with brands and businesses that create</p>
            <p>exceptional experiences where people</p>
            <p>live,work and unwind</p>
          </div>

          <div className="mt-10 text-6xl sm:text-[18rem] sm:mt-10 headings">
            <h3 className="leading-none tracking-tighter">Digital</h3>
            <h3 className="leading-none tracking-tighter">Design</h3>
            <h3 className="leading-none tracking-tighter">Experience</h3>
          </div>
          <div className="para2 sm:w-1/3 mt-20">
            <p className="sm:text-xl">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgetable journey starts with a click.
            </p>
            <a
              className="border-b-[.3px] pb-1 mt-4 inline-block border-zinc-100/80"
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
