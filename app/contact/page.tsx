import React from "react";

const page: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-300">Get in Touch</h2>
          <p className="text-gray-400 dark:text-gray-900 mb-8">
            Have a question or want to work together? Fill out the form below
            and we'll get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-300 dark:text-gray-900"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 mt-2 p-2"
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300 dark:text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 mt-2 p-2"
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-300 dark:text-gray-900"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 mt-2 p-2"
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={4}
              />
            </div>
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-900 bg-gray-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-gray-300">
          <h2 className="text-3xl font-bold mb-4">Our Location</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-1">Address</h3>
              <p className="">
                123 Main Street, Anytown USA 12345
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1 ">Phone</h3>
              <p className="">(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <p className="">
                info@example.com
              </p>
            </div>
          </div>
          <div className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default page;
