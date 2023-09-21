import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDelete(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, packed: !item.packed };
      })
    );
  }

  function handleClear() {
    //adding  a confirm dialog  box
    if (!window.confirm("Are you sure you want to clear the list?")) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onCheckItem={handleToggle}
        onClearList={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
