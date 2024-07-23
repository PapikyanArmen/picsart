"use client";
import React, { useEffect, useState } from "react";
import { addNote, deleteNote, editNote, fetchNotes } from "@/api";
import Button from "@/app/components/Button/Button";
import Close from "@/app/components/Icons/Close";
import Delete from "@/app/components/Icons/Delete";
import Edit from "@/app/components/Icons/Edit";
import TextArea from "@/app/components/TextArea/TextArea";
import { variants } from "@/app/helper";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import Modal from "react-modal";
import cn from "classnames";
import { motion } from "framer-motion";

import styles from "./Notes.module.scss";
const Notes = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes);
  const [inputValue, setInputValue] = useState<string>("");
  const [editValue, setEditValue] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);
  const handleDeleteNote = (id: number) => {
    dispatch(deleteNote(id));
  };
  const handleEditNote = (id: number, text: string) => {
    dispatch(editNote({ id, text }));
    setIsOpen(false);
  };
  const handleAddNote = () => {
    dispatch(addNote(inputValue));
    setInputValue("");
  };

  function openModal(text: string, id: number) {
    setIsOpen(true);
    setEditValue(text);
    setId(id);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className={cn(styles.wrapper)}>
        <h2 className={cn(styles.title, "paragraphTitle")}>Notes</h2>
        <div className={cn(styles.item_list)}>
          {notes.notes.map((el, index) => {
            return (
              <motion.div
                key={`comment_${el.id}`}
                variants={variants(index / 10)}
                animate={"show"}
                initial="hide"
                className={cn(styles.item)}
              >
                <span>{el.text}</span>
                <span className={cn(styles.markers)}>
                  <span
                    onClick={() => openModal(el.text, el.id)}
                    className={cn("hover-target")}
                  >
                    <Edit />
                  </span>
                  <span
                    onClick={() => handleDeleteNote(el.id)}
                    className={cn("hover-target")}
                  >
                    <Delete />
                  </span>
                </span>
              </motion.div>
            );
          })}
        </div>
        <TextArea setInputValue={setInputValue} textAreValue={inputValue} />
        <Button
          disabled={!inputValue}
          value="ADD NOTE"
          onClick={handleAddNote}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={cn(styles.modal)}
        overlayClassName={cn(styles.modal_overlay)}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
      >
        <div className={cn(styles.modal_close)} onClick={closeModal}>
          <Close />
        </div>
        <h2 className={cn(styles.modal_title)}>Edit note</h2>
        <TextArea setInputValue={setEditValue} textAreValue={editValue} />
        <Button
          disabled={!editValue}
          value="SAVE"
          onClick={() => handleEditNote(id, editValue)}
        />
      </Modal>
    </>
  );
};
export default Notes;
