import React from "react";
import Link from "next/link";

const Programs: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-2xl md:text-5xl font-bold text-gray-300 mt-10 mb-5">
        Programs
      </h1>
      <section className="w-full flex flex-col gap-y-[12rem] py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <img
              alt="3-Months Program for Engineering teams"
              className="overflow-hidden rounded-t-xl md:rounded-xl object-cover object-center sm:w-full lg:order-last md:h-[50vh]"
              height="310"
              src="https://images.unsplash.com/photo-1630514969818-94aefc42ec47?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
            />
            <div className="space-y-4 md:order-last">
              <div className="space-y-2">
                <h2 className="text-3xl text-gray-300 font-bold tracking-tighter sm:text-5xl">
                Free 30-Day Git and GitHub Training
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-900">
                Join our exclusive WhatsApp group and learn Git and GitHub from the experts. The training starts on June 1st, 2024.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-300 px-8 font-medium text-gray-900 shadow transition-colors hover:bg-black hover:border hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Enroll
              </Link>
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <img
              alt="100-Day Plan for Coding Schools Students"
              className="overflow-hidden rounded-t-xl md:rounded-xl object-cover object-center sm:w-full lg:order-last md:h-[50vh]"
              height="310"
              src="https://images.unsplash.com/photo-1652305500057-0fcb348b62aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
            />
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl text-gray-300 font-bold tracking-tighter sm:text-5xl">
                  100-Day Plan for Coding Schools Students
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-900">
                  Detailed timeline of a 100-day comprehensive program designed
                  to train students with the essential techniques for effective
                  collaboration with their peers, fostering a collaborative
                  learning environment and mastering coding principles and
                  practices.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 font-medium text-gray-900 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Enroll
              </Link>
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <img
              alt="3-Months Program for Engineering teams"
              className="overflow-hidden rounded-t-xl md:rounded-xl object-cover object-center sm:w-full lg:order-last md:h-[50vh]"
              height="310"
              src="https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
            />
            <div className="space-y-4 md:order-last">
              <div className="space-y-2">
                <h2 className="text-3xl text-gray-300 font-bold tracking-tighter sm:text-5xl">
                  3-Months Program for Engineering teams
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-900">
                  Let your teams start a journey to improve their skills,
                  collaborate with team members, and explore new ways to work
                  through a series of workshops, hands-on projects, and
                  mentorship sessions. Join us and revolutionize your approach
                  to collaborative work.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 px-8 font-medium text-gray-900 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-300 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Enroll
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
