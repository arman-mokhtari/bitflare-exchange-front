"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const Testimonial = () => {
  return (
    <section className="hidden py-14 md:block">
      <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800 dark:text-gray-200 md:text-3xl">
        نظرات مشتریان <span className="text-blue-600">بیتفلر</span>
      </h3>

      <div className="flex flex-col items-center">
        <div
          dir="ltr"
          className="relative flex flex-col items-center  justify-center overflow-hidden rounded-md antialiased"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
