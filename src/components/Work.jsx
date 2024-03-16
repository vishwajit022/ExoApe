import React from "react";

function Work() {
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl px-5 py-20 sm:px-10 mx-auto">
        <div className="featured flex gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-2"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="capitalize">featured projects</h3>
        </div>
        <h1 className="text-6xl my-5">Work</h1>
        <p className="leading-2 text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems mt-10">
          <div className="elem w-full  ">
            <div className="video h-[104vw] overflow-hidden relative w-full ">
              <img
                className="w-full h-full object-cover hidden sm:block"
                src="https://a.storyblok.com/f/133769/2409x3000/b5ccf4619b/studio-d-hero.jpg/m/900x1121/filters:format(webp):quality(70)"
                alt=""
              />
              <video
                className="w-full h-full scale-[1.3] sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                autoPlay
                muted
                loop
                src="https://download-video.akamaized.net/v3-1/playback/ce96d614-0713-4c81-9bc2-50efc8aa2d4e/94252be6?__token__=st=1710553409~exp=1710567809~acl=%2Fv3-1%2Fplayback%2Fce96d614-0713-4c81-9bc2-50efc8aa2d4e%2F94252be6%2A~hmac=b30742050ee9d1ca02518675c2125cd269f7490fd75b29625a539cec302f9542&r=dXMtY2VudHJhbDE%3D"
              ></video>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Pixel Flakes</h3>
            <h3 className="capitalize opacity-40">
              Architectural Marketing Agency
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
