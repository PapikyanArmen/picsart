"use client";
import React, { useEffect, useState } from "react";
import { addComment, deleteComment, fetchComments } from "@/api";
import Button from "@/app/components/Button/Button";
import Delete from "@/app/components/Icons/Delete";
import TextArea from "@/app/components/TextArea/TextArea";
import { variants } from "@/app/helper";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import cn from "classnames";
import { motion } from "framer-motion";

import styles from "./Comments.module.scss";
const Comments = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments);
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  const handleDeleteComment = (id: number) => {
    dispatch(deleteComment(id));
  };
  const handleAddComment = () => {
    dispatch(addComment(inputValue));
    setInputValue("");
  };
  return (
    <div className={cn(styles.wrapper)}>
      <h2 className={cn(styles.title, "paragraphTitle")}>Comments</h2>
      <div className={cn(styles.item_list)}>
        {comments.comments.map((el, index) => {
          return (
            <motion.div
              key={`comment_${el.id}`}
              variants={variants(index / 10)}
              animate={"show"}
              initial="hide"
              className={cn(styles.item)}
            >
              <span>{el.text}</span>
              <span
                onClick={() => handleDeleteComment(el.id)}
                className={cn("hover-target")}
              >
                <Delete />
              </span>
            </motion.div>
          );
        })}
      </div>
      <TextArea setInputValue={setInputValue} textAreValue={inputValue} />
      <Button
        disabled={!inputValue}
        value="ADD COMMENT"
        onClick={handleAddComment}
      />
    </div>
  );
};
export default Comments;
