import React from "react";
import { featureData } from "@/lib/data";

export const Features: () => React.JSX.Element = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-26 lg:py-32 bg-gray-900 dark:bg-gray-300">
        <div className="container px-4 md:px-6 text-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl text-gray-300 font-bold tracking-tight sm:text-5xl">
                Code & collaborate with others. Build & Ship fast. 🚀
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your students/teams focus on shipping features
                collaboratively instead of solo learning with frustrations.
              </p>
            </div>
          </div>
          <h2 className="text-gray-300 text-2xl mt-6 font-bold tracking-wider">
            Key Features
          </h2>
          <div className="mx-auto grid max-w-5xl items-center gap-7 pt-8 pb-12 lg:grid-cols-3 lg:gap-12 text-center">
            {featureData.map((feature) => (
              <div key={feature.name} className="grid gap-1">
                <feature.icon size={60} className="text-white mx-auto" />
                <h3 className="text-lg font-bold text-gray-300">
                  {feature.name}
                </h3>
                <p className="text-gray-400 dark:text-gray-400">
                  {feature.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
