import React from "react";
import { Button } from "@/components/ui/button";

export const TimeLine: () => React.JSX.Element = () => {
  return (
    <div className="w-full max-w-6xl bg-gray-900 text-gray-300 mx-auto py-6 px-5">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-center">
          <div className="flex-1 md:border-r border-gray-900 dark:border-gray-200 pr-4">
            <h2 className="text-2xl font-bold mb-4">
              100-Day Plan for Coding Schools Students
            </h2>
            <p className="dark:text-gray-900 text-center">
              Detailed timeline of a 100-day comprehensive program designed to
              train students with the essential techniques for effective
              collaboration with their peers, fostering a collaborative learning
              environment and mastering coding principles and practices.
            </p>
            <div className="flex justify-center items-center my-5">
              <Button className="bg-gray-300 text-gray-900 hover:bg-white">Download PDF</Button>
            </div>
          </div>
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-bold mb-4">
              3-Months Program for Engineering teams
            </h2>
            <p className="dark:text-gray-900">
              Let your teams start a journey to improve their skills,
              collaborate with team members, and explore new ways to work
              through a series of workshops, hands-on projects, and mentorship
              sessions. Join us and revolutionize your approach to collaborative
              work.
            </p>
            <div className="flex justify-center items-center my-5">
              <Button className="bg-gray-300 text-gray-900 hover:bg-white">Download PDF</Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />
      </div>
    </div>
  );
};
