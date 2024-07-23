"use client";
import React, { useEffect, useState } from "react";
import ImageFollow from "@/app/components/ImageFollow/ImageFollow";
import OrderComponent from "@/app/components/SortComponent/SortComponent";
import { variants } from "@/app/helper";
import { RootState } from "@/app/store/store";
import { IUser, SortOrder } from "@/app/types";
import { useSelector } from "react-redux";
import cn from "classnames";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import styles from "./UserList.module.scss";
const UserList = (users: { data: IUser[]; order: SortOrder; sort: string }) => {
  const router = useRouter();
  const { data, order, sort } = users;
  const [active, setActive] = useState("");
  const loading = useSelector((state: RootState) => state.loading.loading);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);
  const onMouseEnter = (id: string) => {
    setActive(id);
  };
  const handleRowClick = (slug: string) => {
    router.push(`/users/${slug}`, { scroll: false });
  };
  return (
    <>
      <div className={cn(styles.body)}>
        <div className={cn(styles.wrapper)}>
          <div className={cn(styles.row, styles.header)}>
            <div className={cn(styles.cell)}>
              Name{" "}
              <OrderComponent
                sortName="name"
                defOrder={sort === "age" ? "default" : order}
                defSort={sort}
              />
            </div>
            <div className={cn(styles.cell)}>Email</div>
            <div className={cn(styles.cell, styles.ageHeader)}>
              Age{" "}
              <OrderComponent
                sortName="age"
                defOrder={sort === "name" ? "default" : order}
                defSort={sort}
              />
            </div>
            <div className={cn(styles.cell, styles.actionsHeader)}>Actions</div>
          </div>
          {data.map((el, index) => {
            return (
              <motion.div
                variants={variants(index)}
                animate={"show"}
                initial="hide"
                className={cn(styles.row, styles.row_item, {
                  [styles.row_item_loading]: loading,
                })}
                key={`users_${el.id}`}
                onMouseEnter={() => onMouseEnter(el.id)}
                onClick={() => handleRowClick(el.id)}
              >
                <div
                  className={cn(styles.cell, styles.name, {
                    [styles.cell_loading]: loading,
                  })}
                >
                  <span className={cn(styles.cell_text)}>{el.first_name}</span>
                </div>
                <div
                  className={cn(styles.cell, styles.email, {
                    [styles.cell_loading]: loading,
                  })}
                >
                  <span className={cn(styles.cell_text)}>{el.email}</span>
                </div>
                <div
                  className={cn(styles.cell, {
                    [styles.cell_loading]: loading,
                  })}
                >
                  <span className={cn(styles.cell_text)}>{el.age}</span>
                </div>
                <div
                  className={cn(styles.cell, styles.actions, {
                    [styles.cell_loading]: loading,
                    [styles.cell_loading_actions]: loading,
                  })}
                >
                  {el.actions.map((el, index) => {
                    return (
                      <span
                        key={`action_${index}`}
                        className={cn(styles.action, styles.cell_text)}
                      >
                        {el}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {!data.length ? (
        <h1 className={cn(styles.notFound)}>Users not found</h1>
      ) : null}
      {!loading && data.length ? (
        <ImageFollow list={data} active={active} />
      ) : null}
    </>
  );
};
UserList.displayName = "UserListComponent";

export default React.memo(UserList);
