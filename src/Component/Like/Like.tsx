import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./Like.module.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FaHeart className={styles.Heart} onClick={toggle} />;
  return <FaRegHeart className={styles.EmptyHeart} onClick={toggle} />;
};

export default Like;
