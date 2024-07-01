"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";

const Testimonial = () => {
  return (
    <section className="py-14">
      <h3 className="text-gray-800 dark:text-gray-200 text-2xl font-semibold md:text-3xl text-center mb-8">

        نظرات مشتریان
        {" "}<span className="text-blue-600">بیتفلر</span>
      </h3>

      <div className="flex flex-col items-center">
        <div
          dir="ltr"
          className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
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
