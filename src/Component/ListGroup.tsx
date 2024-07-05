import { useState } from "react";
interface prop {
  items: string[];
  title: string;
  onSelected: (item: string) => void;
}
const ListGroup = ({ items, title, onSelected }: prop) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <ul className="list-group">
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
              onSelected(item);
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
