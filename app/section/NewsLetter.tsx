"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToConvertKit } from "@/lib/utils";

export const NewsLetter: () => React.JSX.Element = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await subscribeToConvertKit(email);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      console.log("error", error);
    }
  };

  return (
    <section className="w-full bg-gray-300 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
            Stay up-to-date with our latest news
          </h2>
          <p className="mt-4 text-gray-900 md:text-lg">
            Subscribe to our newsletter and be the first to know about our new
            features and updates.
          </p>
          <form
            className="mt-8 flex w-full max-w-md mx-auto justify-center items-center space-x-2"
            onSubmit={handleSubmit}
          >
            <Input
              className="flex-1 rounded-md bg-gray-400 px-4 py-3 border-none text-black placeholder:text-gray-400 outline-none focus:outline-none"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              className="rounded-md bg-gray-900 px-6 py-3 text-gray-200 hover:bg-black hover:text-white focus:outline-none"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
          <div className="my-2 h-2">
            {status === "loading" && <p>Loading...</p>}
            {status === "success" && (
              <p>
                Thank you for subscribing, please check your mail to confirm
                newsletter.
              </p>
            )}
            {status === "error" && <p>There was an error. Please try again.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};
