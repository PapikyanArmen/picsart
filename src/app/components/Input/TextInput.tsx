"use client";
import React, { forwardRef } from "react";
import { ITextInput } from "@/app/types";
import cn from "classnames";

import styles from "./TextInput.module.scss";

const TextInput = forwardRef<HTMLInputElement, ITextInput>(
  ({ value, onChange }, ref) => {
    return (
      <label htmlFor="" className={cn(styles.label)}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={ref}
          placeholder="Find User"
        />
      </label>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
