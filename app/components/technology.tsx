import { Mulish } from "next/font/google";
import React from "react";

const mulish = Mulish({ subsets: ["latin"] });

function Technology({ tech }: { tech: string }) {
  return (
    <p
      className={`bg-white whitespace-nowrap text-black shadow-lg text-primary font-semibold py-[0.5rem] rounded-lg hover:scale-95 duration-200 px-[1.3rem] ${mulish.className}`}
    >
      {tech}
    </p>
  );
}

export default Technology;
