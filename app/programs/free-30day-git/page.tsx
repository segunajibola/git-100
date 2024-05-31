import React from "react";

export default function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-gray-300 dark:text-gray-600">
                Master Git & GitHub in 30 Days
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-500">
                Embark on a transformative journey and become a Git & GitHub pro
                in just 30 days. Dive into the fundamentals, explore advanced
                techniques, and unlock the power of collaborative development
                with practical exercises and real-world scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-6">
                <div>
                  <h2 className="text-2xl font-bold">Day 1 - 5: Git Basics</h2>
                  <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Introduction to version control and its importance</li>
                    <li>
                      Installing & Setting up Git on different operating systems
                    </li>
                    <li>
                      Understanding the Git workflow: working directory, staging
                      area, and repository
                    </li>
                    <li>
                      Creating your first repository and making initial commits
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    Day 6 - 10: Working with Commits
                  </h2>
                  <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Understanding commits and commit messages</li>
                    <li>Viewing commit history with `git log`</li>
                    <li>Using `git status` to track changes</li>
                    <li>Comparing changes with `git diff`</li>
                    <li>Undoing changes and commits</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    Day 11 - 15: Git Branching and Merging
                  </h2>
                  <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Creating and switching between branches</li>
                    <li>Merging branches and resolving conflicts</li>
                    <li>Using branches for feature development</li>
                    <li>Branch management: renaming and deleting branches</li>
                    <li>Understanding and visualizing branch history</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    Day 16 - 20: Remote Repositories and GitHub
                  </h2>
                  <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Introduction to GitHub and its features</li>
                    <li>
                      Setting up a GitHub account and configuring SSH keys
                    </li>
                    <li>Connecting local repositories to GitHub</li>
                    <li>
                      Working with remote repositories: cloning, fetching,
                      pulling, and pushing
                    </li>
                    <li>
                      Collaborating on GitHub: forks, pull requests, and code
                      reviews
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    Day 21 - 25: Advanced Git Techniques
                  </h2>
                  <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Using `git stash` to manage work in progress</li>
                    <li>Reverting and resetting commits</li>
                    <li>Advanced `git log` and history exploration</li>
                    <li>Cherry-picking commits</li>
                    <li>Using Git tags for versioning</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    Day 26 - 28: Git Best Practices and Real-world Scenarios
                  </h2>
                  <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>
                      Writing effective commit messages and maintaining a clean
                      commit history
                    </li>
                    <li>Understanding and implementing Gitflow workflow</li>
                    <li>
                      Using Git tools and extensions to enhance productivity
                    </li>
                    <li>
                      Handling large repositories and optimizing performance
                    </li>
                    <li>
                      Participating in open-source projects and contributing to
                      public repositories
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    Day 29 - 30: Collaboration and Community Engagement
                  </h2>
                  <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>
                      Engaging with the GitHub community: stars, issues, and
                      discussions
                    </li>
                    <li>
                      Collaborating on projects: working with teams and managing
                      permissions
                    </li>
                    <li>
                      Connecting with other developers through GitHub Profiles
                      and social media
                    </li>
                    <li>
                      Hosting and participating in Twitter Spaces and live
                      coding sessions
                    </li>
                    <li>
                      Exploring additional learning resources and communities
                      for continuous growth
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    Bonus Topics and Resources
                  </h2>
                  <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Automating workflows with GitHub Actions</li>
                    <li>Securing your repositories with best practices</li>
                    <li>Exploring GitHub Pages for static site hosting</li>
                    <li>Attending Git and GitHub community events</li>
                    <li>Additional learning resources and further reading</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
