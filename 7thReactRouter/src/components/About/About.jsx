import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12 ">
            <img
              className='rounded-lg'
              src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              As a passionate React developer, I thrive on pushing the boundaries of web applications, constantly seeking new ways to innovate. I am dedicated to crafting seamless, dynamic user interfaces, leveraging the powerful features and flexibility of React.
            </p>
            <p className="mt-4 text-gray-600">
              My commitment to excellence ensures that I stay at the forefront of modern web development, driving the field forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}