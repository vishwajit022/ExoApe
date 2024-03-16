import React, { useState } from "react";

function Work() {
  const [data, setData] = useState([
    {
      heading: "Pixel Flakes",
      subheading: "Architecutral Marketing Agency",
      video:
        "https://download-video.akamaized.net/v3-1/playback/57423169-59cb-4b8a-ad09-3bd812a12ee7/4ce94964?__token__=st=1710586007~exp=1710600407~acl=%2Fv3-1%2Fplayback%2F57423169-59cb-4b8a-ad09-3bd812a12ee7%2F4ce94964%2A~hmac=d5dc74faed19f06220b626460a15dac6bfe23bc430c68e3fdcdc0b5c44613676&r=dXMtd2VzdDE%3D",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/b5ccf4619b/studio-d-hero.jpg/m/900x1121/filters:format(webp):quality(70)",
    },
    {
      heading: "Rino & Pelle",
      subheading: "Effortless chic Lifestyle",
      video:
        "https://download-video.akamaized.net/v3-1/playback/66710880-7060-4d65-965e-38a29da54c52/5ac47112?__token__=st=1710585844~exp=1710600244~acl=%2Fv3-1%2Fplayback%2F66710880-7060-4d65-965e-38a29da54c52%2F5ac47112%2A~hmac=428d4a07bf5cd04757b6380961e3dc49e847a7ed0f66c178f542bd87ba3dee52&r=dXMtY2VudHJhbDE%3D",
      image:
        "https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/900x1121/filters:format(webp):quality(70)",
    },
    {
      heading: "Abele Interiors",
      subheading: "Luxurious design experience",
      video:
        "https://download-video.akamaized.net/v3-1/playback/57423169-59cb-4b8a-ad09-3bd812a12ee7/4ce94964?__token__=st=1710586007~exp=1710600407~acl=%2Fv3-1%2Fplayback%2F57423169-59cb-4b8a-ad09-3bd812a12ee7%2F4ce94964%2A~hmac=d5dc74faed19f06220b626460a15dac6bfe23bc430c68e3fdcdc0b5c44613676&r=dXMtd2VzdDE%3D",
      image:
        "https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
    },
    {
      heading: "StudioD",
      subheading: "Urban Landscape Design",
      video:
        "https://download-video.akamaized.net/v3-1/playback/bfac2114-1cd7-4a50-8b21-ec941cbfb811/1f289d51?__token__=st=1710586109~exp=1710600509~acl=%2Fv3-1%2Fplayback%2Fbfac2114-1cd7-4a50-8b21-ec941cbfb811%2F1f289d51%2A~hmac=03c9dbce899bc11ec492597e24125842788db076fec5ebdfe74578efc2c18e11&r=dXMtd2VzdDE%3D",
      image:
        "https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1100x1370/filters:format(webp):quality(70)",
    },
  ]);
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
        <h1 className="text-6xl sm:text-[10vw] sm:tracking-tighter my-5">
          Work
        </h1>
        <p className="leading-2 text-md">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems sm:flex flex-col sm:flex-wrap sm:gap-5 ">
          {data.map((e, i) => (
            <div key={i} className="mt-10  w-full sm:w-[44%]">
              <div className="elem  ">
                <div className="video h-[104vw] sm:h-[60vw] overflow-hidden relative w-full ">
                  <img
                    className="w-full h-full object-cover hidden sm:block"
                    src={e.image}
                    alt=""
                  />
                  <video
                    className="w-full h-full scale-[1.3] sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                    autoPlay
                    muted
                    loop
                    src={e.video}
                  ></video>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">{e.heading}</h3>
                <h3 className="capitalize opacity-40">{e.subheading}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
