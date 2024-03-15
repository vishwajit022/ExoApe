import React from "react";

function Landing() {
  return (
    <div className="relative  w-full  h-[200vh] ">
      <div className="w-full h-full picture">
        <img
          className="object-cover w-full h-full"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)"
          alt=""
        />
      </div>
      <div className="absolute top-0 px-5 mx-auto text-white mt-72 text-md text max-w-screen-2xl sm:px-10">
        <div className="">
          <p>Global digital design studio partnering</p>
          <p>with brands and businesses that create</p>
          <p>exceptional experiences where people</p>
          <p>live,work and unwind</p>
        </div>

        <div className="mt-10 text-6xl headings">
          <h3 className="leading-none tracking-tighter">Digital</h3>
          <h3 className="leading-none tracking-tighter">Design</h3>
          <h3 className="leading-none tracking-tighter">Experience</h3>
        </div>
      </div>
    </div>
  );
}

export default Landing;
