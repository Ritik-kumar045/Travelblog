import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen  overflow-hidden">
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
      src="data:image/jpeg;base64,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"
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
