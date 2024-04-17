/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1hBH5Z7y3uk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from "react";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { testimonialsData } from "@/lib/data";

export const Testimonials: () => React.JSX.Element = () => {
  return (
    <Carousel className="max-w-[70vw] mx-auto text-gray-300 py-24 flex items-center justify-center">
      <CarouselContent>
        {testimonialsData.map((testimonial) => (
          <CarouselItem>
            <div className="grid gap-4 text-center px-4">
              <div className="mx-auto rounded-full border-4 border-white w-24 h-24">
                <img
                  alt="Image"
                  className="rounded-full object-cover object-top"
                  height="96"
                  src={testimonial.image}
                  style={{
                    aspectRatio: "96/96",
                  }}
                  width="96"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-sm font-medium leading-none tracking-tight">
                  {testimonial.title}
                </p>
              </div>
              <blockquote className="text-sm italic border-l-2 pl-2 border-gray-200/40">
                {testimonial.quote}
              </blockquote>
            </div>
          </CarouselItem>
        ))}

        {/* <CarouselItem>
          <div className="grid gap-4 text-center px-4">
            <div className="mx-auto rounded-full border-4 border-white w-24 h-24">
              <img
                alt="Image"
                className="rounded-full"
                height="96"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold">Miguel Rodriguez</h3>
              <p className="text-sm font-medium leading-none tracking-tight">
                Mobile Developer
              </p>
            </div>
            <blockquote className="text-sm italic border-l-2 pl-2 border-gray-200/40">
              “The customer service is top-notch, and we've seen a significant
              increase in user engagement.”
            </blockquote>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="grid gap-4 text-center px-4">
            <div className="mx-auto rounded-full border-4 border-white w-24 h-24">
              <img
                alt="Image"
                className="rounded-full"
                height="96"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold">Sophie Chen</h3>
              <p className="text-sm font-medium leading-none tracking-tight">
                UX Designer
              </p>
            </div>
            <blockquote className="text-sm italic border-l-2 pl-2 border-gray-200/40">
              “The platform is incredibly intuitive and has streamlined our
              workflow.”
            </blockquote>
          </div>
        </CarouselItem> */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
