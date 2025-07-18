import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <div  id = "Hero" className="relative min-h-screen  overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-pink-200 rounded-full opacity-20"></div>

      {/* Content Wrapper */}
      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="mx-auto max-w-md text-center lg:text-left lg:mx-0">
            <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow mb-6">
              Explore the world 🌍
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Travel <span className="text-pink-500">top destination</span> of the world
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              We always make our customers happy by providing as many choices as possible.
            </p>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <a
                href="#"
                className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 transition focus:outline-none focus-visible:outline-2 focus-visible:outline-purple-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="flex items-center text-sm font-semibold text-gray-900 hover:text-purple-600 transition"
              >
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>

       {/* Right Column: Images */}
<div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 items-stretch">
  {/* Left Column - Two stacked images */}
  <div className="flex flex-col gap-4">
    <img
      className="w-full h-48 object-cover rounded-3xl shadow-lg"
      src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt="Kayaking adventure"
    />
    <img
      className="w-full h-48 object-cover rounded-3xl shadow-lg"
      src="assets\pexels-element5-1051073.jpg"
      alt="Seoul city view"
    />
  </div>

  {/* Right Column - One large image */}
  <div className="flex items-center h-full">
    <img
      className="w-full h-[300px] object-cover rounded-3xl shadow-lg"
      src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Tropical beach"
    />
  </div>



            {/* Floating Heart Icon */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">❤️</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
