import React, { useEffect } from "react";
import { IUser } from "@/app/types";
import cn from "classnames";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

import styles from "@/app/components/UserList/UserList.module.scss";
const ImageFollow = (data: { list: IUser[]; active: string }) => {
  const { list, active } = data;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / 10 + (Math.random() * 10 - 5)); // Smaller shake range
      mouseY.set(event.clientY / 10 + (Math.random() * 10 - 5)); // Smaller shake range
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  return (
    <motion.div
      className={cn(styles.image)}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {list.map((el, index) => {
        return (
          <Image
            key={`user_image_${index}`}
            alt={el.id}
            src={el.image}
            sizes="100%"
            fill
            className={cn({ [styles.active]: active === el.id })}
          />
        );
      })}
    </motion.div>
  );
};
export default React.memo(ImageFollow);
