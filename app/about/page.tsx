import React from "react";
import Link from "next/link"
import { IoLogoSteam } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const page: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="max-w-md text-gray-600 dark:text-gray-400 text-lg">
              Discover our mission, values, and the talented team behind our
              innovative software solutions.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-900"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
          <img
            alt="About Us"
            className="rounded-lg shadow-lg"
            height="400"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <img
            alt="Our Mission"
            className="rounded-lg shadow-lg"
            height="400"
            src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600"
          />
          <div className="space-y-4 text-center md:text-left text-gray-300">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Mission
            </h2>
            <p className="max-w-md dark:text-gray-900 text-lg">
              Our mission is to empower businesses with innovative software
              solutions that drive growth and efficiency. We are committed to
              delivering exceptional products and services that exceed our
              clients' expectations.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center gap-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Core Values
            </h2>
            <p className="max-w-md text-gray-600 dark:text-gray-400 text-lg">
              At the heart of our company are the values that guide our
              decision-making and shape our culture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <MdRocketLaunch className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto" />
              <h3 className="text-xl font-bold mt-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                We are committed to pushing the boundaries of technology and
                delivering cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <FaUsers className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto" />
              <h3 className="text-xl font-bold mt-4">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                We believe in the power of teamwork and foster a collaborative
                environment to achieve our goals.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <IoLogoSteam className="h-12 w-12 text-gray-600 dark:text-gray-400 mx-auto" />
              <h3 className="text-xl font-bold mt-4">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                We strive for excellence in everything we do, delivering
                high-quality products and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center gap-10">
          <div className="space-y-4 text-center text-gray-300">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ">
              Meet Our Team
            </h2>
            <p className="max-w-md  dark:text-gray-900 text-lg">
              Our talented team of experts is dedicated to delivering
              exceptional software solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <img
                alt="John Doe"
                className="rounded-full mx-auto"
                height={120}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <h3 className="text-xl font-bold mt-4">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Co-Founder and CEO
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                John is a seasoned entrepreneur with a passion for building
                innovative software solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <img
                alt="Jane Smith"
                className="rounded-full mx-auto"
                height={120}
                src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Chief Technology Officer
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Jane is a highly skilled software engineer with a deep
                understanding of cutting-edge technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <img
                alt="Michael Johnson"
                className="rounded-full mx-auto"
                height={120}
                src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  aspectRatio: "120/120",
                  objectFit: "cover",
                }}
                width={120}
              />
              <h3 className="text-xl font-bold mt-4">Sarah Johnson</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Head of Product
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Michael is a product visionary who ensures our solutions meet
                the evolving needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
