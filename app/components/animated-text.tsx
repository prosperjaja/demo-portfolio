"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  repeatDelay?: number;
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  repeatDelay,
}: AnimatedTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const controls = useAnimation();
  const ref = useRef(null);
  const isInview = useInView(ref, { amount: 0.5, once: true });
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  useEffect(() => {
    let timeOut: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeOut = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };
    if (isInview) {
      show();
    } else {
      controls.start("hidden");
    }
    return () => clearTimeout(timeOut);
  }, [isInview]);

  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
      >
        {textArray.map((item, index) => (
          <span key={index} className="block">
            {item?.split(" ").map((word: string, idx: number) => (
              <span className="inline-block" key={idx}>
                {word.split("").map((el, i) => (
                  <motion.span
                    className="inline-block"
                    key={i}
                    variants={defaultAnimation}
                  >
                    {el}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
