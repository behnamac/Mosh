import { ReactNode } from "react";

interface prop {
  children: ReactNode;
  onClicked: () => void;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ children, onClicked, color = "secondary" }: prop) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClicked}>
      {children}
    </button>
  );
};

export default Button;
