"use client";

import React from "react";
import cn from "classnames";
import { AnimatePresence, motion, Spring } from "framer-motion";
import { usePathname } from "next/navigation";

import styles from "./PageTransition.module.scss";
// Prevents instant page opening

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  return (
    <>
      <AnimatePresence mode={"wait"} initial={true}>
        <motion.div key={pathname}>
          <motion.div
            className={cn(styles.pattern)}
            animate={{ opacity: "0" }}
            exit={{ opacity: "1" }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0 }}
          >
            <h1>PICSART</h1>
          </motion.div>
          <motion.div
            className={cn(styles.frame)}
            style={{
              bottom: 0,
            }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />
          <motion.div
            className={cn(styles.frame, styles.frame_second)}
            style={{
              bottom: 0,
            }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0.1 }}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />
          <motion.div
            className={cn(styles.frame)}
            style={{
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{
              height: "0vh",
              transition: { duration: 0.7, delay: 0, ease: "easeIn" },
            }}
          />
          <motion.div
            className={cn(styles.frame, styles.frame_second)}
            style={{
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{
              height: "0vh",
              transition: { duration: 0.7, delay: 0.1, ease: "easeIn" },
            }}
          />
        </motion.div>
        {children}
      </AnimatePresence>
    </>
  );
}
