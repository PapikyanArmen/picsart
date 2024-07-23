"use client";
import React from "react";
import BackIcon from "@/app/components/Icons/BackIcon";
import { IUser } from "@/app/types";
import cn from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import styles from "./user.module.scss";
const User = (user: { data: IUser }) => {
  const { data } = user;
  const router = useRouter();
  return (
    <main className={cn("container")}>
      <div
        className={cn(styles.back)}
        onClick={() => {
          router.back();
        }}
      >
        <BackIcon />
      </div>
      <div className={cn(styles.wrapper)}>
        <div className={cn(styles.inf)}>
          <h1 className={cn(styles.inf_name)}>{data.name}</h1>
          <p className={cn(styles.inf_detail)}>
            <span>
              <b>Email</b>: {data.email}
            </span>
          </p>
          <p className={cn(styles.inf_detail)}>
            <span>
              <b>Address</b>: {data.address}
            </span>
          </p>
          <p className={cn(styles.inf_detail)}>
            <span>
              <b>Age</b>: {data.age}
            </span>
          </p>
        </div>
        <motion.div
          initial={{ skewX: -5, y: 200 }}
          animate={{ skewX: 0, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          className={cn(styles.image)}
          style={{ backgroundImage: `url(${data.image})` }}
        />
      </div>
    </main>
  );
};
export default User;
