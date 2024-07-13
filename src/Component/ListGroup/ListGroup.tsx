import { useState } from "react";
import styles from './ListGroup.module.css'
interface prop {
  items: string[];
  title: string;
}
const ListGroup = ({ items, title }: prop) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <ul className={styles.golaby}>
        <h1>{title}</h1>
        {items.length === 0 && <p>items not found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
