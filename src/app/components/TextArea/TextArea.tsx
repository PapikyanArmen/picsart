import React, { ChangeEvent } from "react";
import cn from "classnames";

import styles from "./TextArea.module.scss";
interface TextAreaComponentProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  textAreValue?: string;
}

const TextArea: React.FC<TextAreaComponentProps> = ({
  setInputValue,
  textAreValue,
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <textarea
      onChange={handleChange}
      className={cn(styles.container)}
      value={textAreValue}
    />
  );
};

export default TextArea;
