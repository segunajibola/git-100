import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const NewsLetter: () => React.JSX.Element = () => {
  return (
    <section className="w-full bg-gray-900 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Stay up-to-date with our latest news
          </h2>
          <p className="mt-4 text-gray-400 md:text-lg">
            Subscribe to our newsletter and be the first to know about our new
            features and updates.
          </p>
          <form className="mt-8 flex w-full max-w-md mx-auto justify-center items-center space-x-2">
            <Input
              className="flex-1 rounded-md bg-gray-800 px-4 py-3 border-none text-white placeholder:text-gray-400 outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <Button
              className="rounded-md bg-gray-300 px-6 py-3 text-gray-900 hover:bg-gray-100 hover:text-black focus:outline-none"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
