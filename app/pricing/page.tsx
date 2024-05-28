import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Unlock Your Collaboration Potential
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Elevate your team's productivity with our comprehensive Git,
              GitHub, and engineering collaboration platform.
            </p>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Choose a plan
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get started with the essentials for individual developers.
              </p>
            </div>
            <ul className="grid gap-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Git and GitHub Fundamentals
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Collaboration Tools
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Basic Reporting
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Community Support
              </li>
            </ul>
            <div className="mt-auto">
              <div className="text-4xl font-bold">$0</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                per user / month
              </div>
              <Button className="mt-4 w-full">Sign Up</Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Elevate your team's collaboration with advanced features.
              </p>
            </div>
            <ul className="grid gap-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Everything in Basic, plus:
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Advanced Collaboration Tools
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Comprehensive Reporting
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Priority Support
              </li>
            </ul>
            <div className="mt-auto">
              <div className="text-4xl font-bold">$10</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                per user / month
              </div>
              <Button className="mt-4 w-full">Sign Up</Button>
            </div>
          </div>
          <div className="grid gap-4 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tailored solutions for large teams and organizations.
              </p>
            </div>
            <ul className="grid gap-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Everything in Pro, plus:
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Dedicated Account Management
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Advanced Security and Compliance
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 fill-primary" />
                Customized Onboarding and Training
              </li>
            </ul>
            <div className="mt-auto">
              <div className="text-4xl font-bold">$20</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Tailored to your needs
              </div>
              <Button className="mt-4 w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
