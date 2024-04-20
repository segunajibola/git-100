import React from "react";
import { featureData } from "@/lib/data";

export const Features: () => React.JSX.Element = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-10 md:py-24 lg:py-32 bg-gray-900 dark:bg-gray-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl text-gray-300 font-bold tracking-tighter sm:text-5xl">
                Code & collaborate with others. Build & Ship fast. 🚀
              </h2>
              <p className="max-w-[900px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The platform for collaborative building. Let your students focus
                on shipping features in teams instead of solo learning with
                frustrations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-7 py-12 lg:grid-cols-3 lg:gap-12 text-center">
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
            <div className="grid gap-1">
              {/* <AiOutlineInteraction size={60} className="text-white mx-auto" /> */}
              <h3 className="text-lg font-bold text-gray-300">
                Interactive Tutorials
              </h3>
              <p className="text-gray-400 dark:text-gray-400">
                Our interactive tutorials guide you through an hands-on
                exercises, allowing you to practice using Git and GitHub in a
                real-world context.
              </p>
            </div>
            <div className="grid gap-1">
              {/* <MdOndemandVideo size={60} className="text-white" /> */}
              <h3 className="text-lg font-bold text-gray-300">Video Lessons</h3>
              <p className="text-gray-400 dark:text-gray-400">
                Video lessons presented by experienced instructors, covering
                different concepts of Git and GitHub in an engaging manner.
              </p>
            </div>
            <div className="grid gap-1">
              {/* <MdQuiz size={60} className="text-white" /> */}
              <h3 className="text-lg font-bold text-gray-300">
                Quizzes and Assessments
              </h3>
              <p className="text-gray-400 dark:text-gray-400">
                Quizzes and assessments at the end of each module to test
                student's understanding and reinforce learning.
              </p>
            </div>
            <div className="grid gap-1">
              {/* <GrResources size={60} className="text-white" /> */}
              <h3 className="text-lg font-bold text-gray-300">
                Documentation and Resources
              </h3>
              <p className="text-gray-400 dark:text-gray-400">
                Comprehensive documentation and supplementary resources, such as
                cheat sheets, guides, and reference materials, for you to refer
                back to.
              </p>
            </div>
            <div className="grid gap-1">
              {/* <GoCommentDiscussion size={60} className="text-white" /> */}
              <h3 className="text-lg font-bold text-gray-300">
                Discussion Forums and Q&A
              </h3>
              <p className="text-gray-400 dark:text-gray-400">
                A place where you can ask questions, share tips, and interact
                with instructors and peers.
              </p>
            </div>
            <div className="grid gap-1">
              {/* <GrCertificate size={60} className="text-white" /> */}
              <h3 className="text-lg font-bold text-gray-300">
                Certificates of Completion
              </h3>
              <p className="text-gray-400 dark:text-gray-400">
                Get certificates of completion after finishing the training
                program, which can showcase on your resumes or LinkedIn
                profiles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
