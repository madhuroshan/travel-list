import { useState } from "react";

//Packing List --> Item Component
export default function PackingList({
  items,
  onDeleteItem,
  onCheckItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("packed");

  let sortedItems;

  if (sortBy === "packed") {
    sortedItems = [...items].sort((a, b) => a.packed - b.packed);
  }
  if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }
  if (sortBy === "input") {
    sortedItems = [...items].sort((a, b) => a.value - b.value);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => onCheckItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.value} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort by Input</option>
          <option value="packed">Sort by Packed</option>
          <option value="description">Sort by Description</option>
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}
