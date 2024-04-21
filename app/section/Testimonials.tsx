import React from "react";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { testimonialsData } from "@/lib/data";
import { Testimonial } from "@/lib/types"

export const Testimonials: () => React.JSX.Element = () => {
  return (
    <Carousel className="max-w-[70vw] mx-auto bg-gray-300 text-gray-900 py-20 flex items-center justify-center">
      <CarouselContent>
        {testimonialsData.map((testimonial: Testimonial) => (
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
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
