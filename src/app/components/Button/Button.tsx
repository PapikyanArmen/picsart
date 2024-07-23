import React from "react";
import cn from "classnames";

import styles from "./Button.module.scss";
interface ButtonProps {
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({ value, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.container, {
        [styles.container_disabled]: disabled,
      })}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
