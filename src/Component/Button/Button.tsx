import { ReactNode } from "react";
import styles from "./button.module.css";

interface prop {
  children: ReactNode;
  onClicked: () => void;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, onClicked, color = "primary" }: prop) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClicked}
    >
      {children}
    </button>
  );
};

export default Button;
